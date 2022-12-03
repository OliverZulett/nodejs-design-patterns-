require("./customLogger");
const logger = require("./logger");

const upperCase = require("./keysConvertion");

const Logger = require("./logger.class");

const dbLogger = require("./dbLogger");

const msg = "Esto es un mensaje informativo";


logger.infoLog(upperCase(msg));
logger.errorLog("Esto es un mensaje de error ");
logger.debugLog("Esto es un mensaje de debug ");


apiLogger = new Logger("API");

apiLogger.info("es un mensaje informativo");
apiLogger.error("es un mensaje de error");
apiLogger.debug("es un mensaje de debug");
apiLogger.verbose("es un mensaje explicito");


dbLogger.info("esto es un mensaje de base de datos");

logger.customLog();
