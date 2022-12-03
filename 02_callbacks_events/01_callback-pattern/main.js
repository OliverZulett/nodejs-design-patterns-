import fileReader from "./read-file/file-reader-v1.js";
import createFileReaderWithCache from "./read-file/file-reader-v2.js";
import readJSON from "./read-file/json-reader.js";

readJSON('./file.json', (err, jsonData) => {
  if (err) {
    console.error('Existe un error:', err);
  } else {
    console.log(jsonData);
  }
})

// fileReader("./read-file/file.txt", (fileContent) => console.log(fileContent));

// fileReaderWithCache("./read-file/file-large.txt", (fileContent) => console.log(fileContent));

// const fileReaderWithCache = createFileReaderWithCache(
//   "./read-file/file-large.txt"
// );

// fileReaderWithCache.onFileReady((fileContent) => {
//   console.log("Primera lectura:", fileContent);
//   const fileReaderWithCache2 = createFileReaderWithCache(
//     "./read-file/file-large.txt"
//   );
//   fileReaderWithCache2.onFileReady((fileContent) => {
//     console.log("Segunda lectura:", fileContent);
//   });
// });
