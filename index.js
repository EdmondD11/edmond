console.log("Its working");
import fs from "fs";
import fsPromise from "fs/promises";
fs.writeFileSync("mytxt.txt","Homework 02 in Basic Node");
fs.appendFileSync("./mytxt.txt","\n Finished");
const readDocument= fs.readFileSync("./mytxt.txt","utf8");
console.log(readDocument);
//First Homework is Done!
