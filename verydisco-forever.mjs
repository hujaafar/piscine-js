import { writeFile } from 'fs/promises'
const args = process.argv.slice(2);
function splitWords(word) {
    const mid = Math.ceil(word.length / 2);
    const fHalf = word.slice(0, mid);
    const sHalf = word.slice(mid);
    return sHalf + fHalf;
}
async function writeContent(fName, msg) {
    await writeFile(fName, msg, function (err) {
        if (err) console.log(err);
    });
}
function proArgs(args) {
    const words = args.split(' ');
    const result = words.length == 1 ? splitWords(args) : words.map(splitWords).join(' ');
    writeContent('verydisco-forever.txt', result);
}
if (proArgs.length > 0) {
    proArgs(args[0]);
} else {
    console.log('Please provide an argument.');
}