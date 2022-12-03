import { readFileSync } from "fs";

const cache = new Map();

function fileReaderWithCache(fileName, callback) {
  if (cache.has(fileName)) {
    callback(cache.get(fileName)); //sincrona
  } else {
    const fileData = readFileSync(fileName, 'utf8');
    cache.set(fileName, fileData);
    callback(fileData); //sincrona
  }

  // readFile(fileName, "utf8", (err, data) => { //asincrona
  //   cache.set(fileName, data);
  //   callback(data);
  // });
}

export default function createFileReaderWithCache (fileName) {
  const listeners = [];

  fileReaderWithCache(fileName, fileContent => {
    listeners.forEach(listenerFn => listenerFn(fileContent))
  });

  return {
    onFileReady: listenerFn => listeners.push(listenerFn)
  }
}