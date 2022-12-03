class Logger {
  constructor(name) {
    this.name = name;
  }

  info(msg) {
    console.info(`[INFO] - ${this.name}:  ${msg}`);
  }

  debug(msg) {
    console.debug(`[DEBUG] - ${this.name}:  ${msg}`);
  }

  error(msg) {
    console.error(`[ERROR] - ${this.name}:  ${msg}`);
  }

  verbose(msg) {
    console.log(`[VERBOSE] - ${this.name}:  ${msg}`);
  }
}

module.exports = Logger;