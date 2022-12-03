import { readFile } from "fs";

export default function fileReader(fileName, callback) {
  readFile(fileName, "utf8", (err, data) => {
    callback(data);
  });
}
