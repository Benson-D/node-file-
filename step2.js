"use strict";

const axios = require("axios");
const fsP = require("fs/promises");

async function cat(path) {
  try {
    let readLine = await fsP.readFile(path, "utf8");
    console.log(readLine);
  } catch (err) {
    console.log(err.message);
  }
}

// cat(process.argv[2]);

async function webCat(url) {
  try {
    let response = await axios({ url });
    console.log(response.data);
  } catch (err) {
    console.error(err.message);
  }
}

// webCat(process.argv[2]);

if (process.argv[2].startsWith("http://")) {
  webCat(process.argv[2]);
} else {
  cat(process.argv[2]);
}
