// named exports

exports.infoLog = (msg) => {
  console.log(`info: ${msg}`);
};

exports.errorLog = (ErrMsg) => {
  console.log(`error: ${ErrMsg}`);
};

module.exports.debugLog = (DebugMsg) => {
  console.log(`debug: ${DebugMsg}`);
}
