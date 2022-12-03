import OSInf from "os";

export default class OS {
  constructor(name) {
    this.name = name;
  }

  getUpTime() {
    console.log(`[${this.name}] - UPTIME: ${OSInf.uptime()}`);
  }

  getKernelVersion() {
    console.log(`[${this.name}] - KERNEL_V: ${OSInf.version()}`);
  }

  getTotalMem() {
    console.log(`[${this.name}] - TOT_MEM: ${OSInf.totalmem()}`);
  }
}

export const ARCH = OSInf.arch();