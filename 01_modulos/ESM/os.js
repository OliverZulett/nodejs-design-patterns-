// const os = require('node:os');

import os from "node:os";

export const ARCH = os.arch();

export function getArch() {
  console.log(`CPU ARCH: ${os.arch()}`);
}

export const getInfoCores = () => {
  console.log(`CORES info:`, os.cpus());
};

export class SystemInfo {
  getOSType() {
    console.log(`OS type: ${os.type()}`);
  }
}
