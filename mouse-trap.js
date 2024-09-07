var circles = [];
var box;

class Circle {
    // Creates an instance of a circle
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.HTML = null;
        this.draw();
        circles.push(this);
    }

    // "Draws" the circle by creating a div and appending it to the body
    draw() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = this.y + "px";
        this.HTML.style.left = this.x + "px";
        this.HTML.style.width = this.diameter + "px";
        this.HTML.style.height = this.diameter + "px";
        this.HTML.style.borderRadius = "50%";
        this.HTML.style.background = "white";
        this.trapped(); // Check if it's trapped upon creation
        document.body.appendChild(this.HTML);
    }

    // Moves the circle to the given x and y coordinates
    move(x, y) {
        this.trapped();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.top = this.y + "px";
            this.HTML.style.left = this.x + "px";
        } else {
            if (this.inRectangle(x, y)) {
                this.x = x;
                this.y = y;
                this.HTML.style.top = this.y + "px";
                this.HTML.style.left = this.x + "px";
            } else {
                if (this.inRectangle(x, this.y)) {
                    this.x = x;
                    this.HTML.style.left = this.x + "px";
                } else if (this.inRectangle(this.x, y)) {
                    this.y = y;
                    this.HTML.style.top = this.y + "px";
                }
            }
        }
    }

    // Checks if the circle is inside the box
    trapped() {
        if (
            this.x >= box.x &&
            this.x + this.diameter <= box.x + box.width &&
            this.y >= box.y &&
            this.y + this.diameter <= box.y + box.height
        ) {
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        } else {
            this.isTrapped = false;
            this.HTML.style.background = "white";
        }
    }

    // Checks if the given x and y coordinates for the circle are inside the box
    inRectangle(x, y) {
        return (
            x >= box.x &&
            x + this.diameter <= box.x + box.width &&
            y >= box.y &&
            y + this.diameter <= box.y + box.height
        );
    }
}

class Box {
    constructor() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = "50%";
        this.HTML.style.left = "50%";
        this.HTML.style.width = "300px"; // Set a width for the box
        this.HTML.style.height = "300px"; // Set a height for the box
        this.HTML.style.border = "2px solid black"; // Add a border for visibility
        this.HTML.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(this.HTML);
        this.x = this.HTML.offsetLeft;
        this.y = this.HTML.offsetTop;
        this.width = this.HTML.offsetWidth;
        this.height = this.HTML.offsetHeight;
    }
}

// Event listener for creating a circle on click
document.body.addEventListener("click", (e) => {
    createCircle(e);
});

// Event listener for moving the last created circle with mouse movements
document.body.addEventListener("mousemove", (e) => {
    moveCircle(e);
});

function createCircle(e) {
    if (e === undefined) return;
    new Circle(e.clientX - 25, e.clientY - 25); // Center the circle at the click position
}

function moveCircle(e) {
    if (e === undefined || circles.length === 0) return;
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25); // Move the last created circle
}

function setBox() {
    box = new Box();
}

export { createCircle, moveCircle, setBox };
