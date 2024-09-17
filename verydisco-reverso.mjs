import { readFile } from 'fs/promises'
const args = process.argv.slice(2);
const fName = args[0];
const content = await readFile(fName, 'utf8');
const splitWord=(word)=> {
    const mid = Math.floor(word.length / 2);
    const fHalf = word.slice(0, mid);
    const sHalf = word.slice(mid);
    return sHalf + fHalf;
}
const solve=(args)=> {
    let list = args.split(' ');
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'verydisco') {
            list[i] = 'discovery';
        } else {
            list[i] = splitWord(list[i]);
        }
    }
    return list.join(' ');
}
const res = solve(content);
console.log(res);