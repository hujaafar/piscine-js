import { readFile, writeFile } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
const args = process.argv.slice(2);
async function encodeFile(filePath, newFileName) {
    try {
        const fileContent = await readFile(filePath);
        const encodedContent = fileContent.toString('base64');
        const newFilePath = newFileName || 'cypher.txt';
        await writeFile(newFilePath, encodedContent, 'utf8');
        console.log('File encoded successfully!');
    } catch (error) {
        console.log('Error encoding file: ', error.message);
    }
}
async function decodeFile(filePath, newFileName) {
    try {
        const fileContent = await readFile(filePath, 'utf8');
        const decodedContent = Buffer.from(fileContent, 'base64').toString('utf8');
        const newFilePath = newFileName || 'clear.txt';
        await writeFile(newFilePath, decodedContent, 'utf8');
        console.log('File decoded successfully!');
    } catch (error) {
        console.log('Error decoding file: ', error.message);
    }
}
if (args.length >= 2) {
    const [filePath, op, newFileName] = args;
    if (op === 'encode') {
        encodeFile(filePath, newFileName);
    } else if (op === 'decode') {
        decodeFile(filePath, newFileName);
    } else {
        console.log('Incorrect operation command. Type "encode" or "decode"');
    }
} else {
    console.log('USAGE:\n$ node tell-ut-cypher <file.txt> <encode|decode>');
}
