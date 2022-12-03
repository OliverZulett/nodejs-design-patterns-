import { EventEmitter } from "events";
import { readFile, readFileSync } from "fs";

export default class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  findRegex() {
    const totalFiles = this.files.length;

    for (let index = 0; index < this.files.length; index++) {
      const file = this.files[index];
      readFile(file, "utf8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }

        this.emit("fileRead", file);

        const match = content.match(this.regex);

        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }

        if (index + 1 === totalFiles) {
          this.emit("done", ["error", "fileRead", "found"]);
        }
      });
    }
    return this;
  }

  checkListeners(eventName, cb) {
    cb(this.listenerCount(eventName));
    return this;
  }
}
