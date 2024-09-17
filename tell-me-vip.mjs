import { writeFile, readdir, readFile } from 'fs/promises'
const args = process.argv.slice(2);
const arg = args[0];
const files = await readdir(arg);
async function writeContent(fName, msg) {
    await writeFile(fName, msg, function (err) {
        if (err) console.log(err);
    });
}
async function solve(l) {
    let arr = [];
    for (let i = 0; i < files.length; i++) {
        const content = await readFile(arg + "/" + files[i], 'utf8');
        const obj = JSON.parse(content);
        if (obj.answer === 'yes') {
            arr.push(files[i]);
        }
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let list = arr[i].split('_');
        let fName = list[0];
        let lName = list[1].slice(0, list[1].length-5);
        let line = lName + " " + fName;
        arr2.push(line);
    }
    arr2.sort();
    let arr3 = [];
    for (let i = 0; i < arr2.length; i++) {
        let n = i + 1;
        arr3.push(n + ". " + arr2[i]);
    }
    const res = arr3.join('\n');
    writeContent('vip.txt', res);
}
solve(files);
