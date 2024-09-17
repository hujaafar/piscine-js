const args = process.argv.slice(2);
function splitWords(word) {
    const mid = Math.ceil(word.length / 2);
    const fHalf = word.slice(0, mid);
    const sHalf = word.slice(mid);
    return sHalf + fHalf;
}
const proArgs=(args)=> {
    const words = args.split(' ');
    const result = words.length == 1 ? splitWords(args) : words.map(splitWords).join(' ');
    console.log(result);
}
if (proArgs.length > 0) {
    proArgs(args[0]);
} else {
    console.log('Please provide an argument.');
}

