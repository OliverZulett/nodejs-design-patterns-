import * as osModule from "./os.js";
import { ARCH, getInfoCores, getArch, SystemInfo } from "./os.js";
import { ARCH as ARCHITECTURE } from "./os.js";

import OSInfo, { ARCH as arch } from "./os.class.js";

const osInfo = new OSInfo("sudo");

osInfo.getUpTime();
osInfo.getKernelVersion();
osInfo.getTotalMem();

console.log("arquitectura del systema", arch);

// console.log(ARCH);
// console.log(`arquitectura del systema:`, ARCHITECTURE)

// getArch();

// getArch();
// getInfoCores();
// // osModule.getArch();
// // osModule.getInfoCores();

// const systemInfo = new osModule.SystemInfo();

// systemInfo.getOSType();
