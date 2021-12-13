const {
  readdir,
  readFile,
  writeFile
} = require("fs/promises");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");

// Read and reverse contents of text files in a directory
(async function () {
  let files;
  let data;
  try {
    files = await readdir(inbox);
  } catch (err) {
    return console.log("Error: Folder inaccessible");
  }
  for (const file of files) {
    console.log(file);
    try {
      data = await readFile(join(inbox, file), "utf8");
    } catch (err) {
      return console.log("Error: File error");
    }
    try {
      await writeFile(join(outbox, file), reverseText(data));
    } catch (err) {
      return console.log("Error: File could not be saved!");
    }
    console.log(`${file} was successfully saved in the outbox!`);
  }

})()

