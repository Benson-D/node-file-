"use strict";

const fsP = require("fs/promises");

async function cat(path) {
  try {
    let readLine = await fsP.readFile(path, "utf8");
    console.log(readLine);
  } catch (err) {
    console.log(err.message);
  }
}

cat(process.argv[2]);
