import findRegex from "./findRegex.function.js";
import FindRegex from "./findRegex.class.js";

const regex = /[A-Z]+/g;

// const regexEmitter = findRegex(["./fileA.txt", "./fileB.json"], regex);
// regexEmitter
//   .on("error", (err) => {
//     console.error(`Error emitido: ${err.message}`);
//   })
//   .on("fileRead", (file) => console.log(`${file} se ha leido`))
//   .on("found", (file, elem) => console.log(`Se encontro "${elem}" en ${file}`));

const findRegexInstance = new FindRegex(regex);

const errorHandler = (err) => console.error(`Error emitido: ${err.message}`);
const fileReadHandler = (file) => console.log(`${file} se ha leido`);
const foundHandler = (file, elem) =>
  console.log(`Se encontro "${elem}" en ${file}`);

const removeListenersHandler = (eventsNames) => {
  console.log('---------------------');
  eventsNames.forEach((eventName) =>
    findRegexInstance
      .removeAllListeners(eventName)
      .checkListeners(eventName, (listeners) =>
        console.log(`Listeners de ${eventName}: ${listeners}`)
      )
  );
};

findRegexInstance
  .addFile("./fileA.txt")
  .addFile("./fileB.json")
  .findRegex()
  .on("error", errorHandler)
  .on("fileRead", fileReadHandler)
  .on("found", foundHandler)
  .on("done", removeListenersHandler)
  .checkListeners("error", (listeners) =>
    console.log(`Listeners de error: ${listeners}`)
  )
  .checkListeners("fileRead", (listeners) =>
    console.log(`Listeners de fileRead: ${listeners}`)
  )
  .checkListeners("found", (listeners) =>
    console.log(`Listeners de found: ${listeners}`)
  );
