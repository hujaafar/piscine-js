import { readdir } from 'node:fs/promises';
// Get the directory path from the command line arguments
const args = process.argv.slice(2);
const dirPath = args[0] || '.'; // Default to current directory if no argument is passed
try {
  // Read the directory and get the number of entries
  const files = await readdir(dirPath);
  console.log(files.length);
} catch (error) {
  console.error(`Error reading directory: ${error.message}`);
}