GET /mouse-trap/mouse-trap.html
GET /mouse-trap/mouse-trap.data.css
GET /mouse-trap/mouse-trap.js
test #2 failed:
async ({ page, eq, getCirclesPos }) => {
  // check that a circle is trapped and purple when inside the box
  const box = await page.$eval('.box', box => ({
    top: box.getBoundingClientRect().top,
    right: box.getBoundingClientRect().right,
    left: box.getBoundingClientRect().left,
    bottom: box.getBoundingClientRect().bottom,
  }))

  await page.mouse.click(200, 200)

  let move = 200
  let hasEntered = false

  while (move < 500) {
    const x = move + 50
    const y = move
    await page.mouse.move(x, y)

    const circles = await getCirclesPos()
    const currentCircle = circles[circles.length - 1]

    const circleRadius = 25

    const bg = await page.$$eval(
      '.circle',
      nodes => nodes[nodes.length - 1].style.background,
    )

    const insideX = x > box.left + circleRadius && x < box.right - circleRadius
    const insideY = y > box.top + circleRadius && y < box.bottom - circleRadius
    const isInside = insideX && insideY

    // check that the background is set to the right color
    if (isInside) {
      hasEntered = true
      eq(bg, 'var(--purple)')
    } else {
      eq(bg, hasEntered ? 'var(--purple)' : 'white')
    }

    // check that the mouse is trapped inside the box
    if (hasEntered) {
      if (insideY) {
        eq(currentCircle[1], y)
      } else {
        const maxY =
          currentCircle[1] === box.top + circleRadius + 1 ||
          currentCircle[1] === box.top + circleRadius ||
          currentCircle[1] === box.bottom - circleRadius ||
          currentCircle[1] === box.bottom - circleRadius - 1
        eq(maxY, true)
      }
      if (insideX) {
        eq(currentCircle[0], x)
      } else {
        const maxX =
          currentCircle[0] === box.left + circleRadius ||
          currentCircle[0] === box.left + circleRadius + 1 ||
          currentCircle[0] === box.right - circleRadius ||
          currentCircle[0] === box.right - circleRadius - 1
        eq(maxX, true)
      }
    }
    move++
  }
}
AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
+ actual - expected

+ 'white'
- 'var(--purple)'
    at file:///app/mouse-trap_test.js:84:7
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Server.<anonymous> (file:///app/test.js:147:11)