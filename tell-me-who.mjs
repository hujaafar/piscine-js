import { readdir } from 'node:fs/promises';
const args = process.argv.slice(2);
const arg = args[0];
const files = await readdir(arg);
function solve(files) {
    let arr = [];
    for (let i = 0; i < files.length; i++) {
        let items = files[i].split('_');
        let fName = items[0];
        let lName = items[1].slice(0, items[1].length-5);
        let l = lName + " " + fName;
        arr.push(l);
    }
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        let n = i + 1;
        console.log(n + ". " + arr[i]);
    }
}
solve(files);
