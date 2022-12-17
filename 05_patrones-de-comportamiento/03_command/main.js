import { Invoker } from "./invoker.js";
import { createPostStatusCmd } from "./createPostStatusCmd.js";
import { statusUpdateService } from "./statusUpdateService.js";

const invoker = new Invoker();
// creamos el comando
const command = createPostStatusCmd(statusUpdateService, 'Message')
// ejecutamos el comando de inmediato
invoker.run(command)
// si queremos revertir los cambios
invoker.undo()
// podemos ejecutar el comando con retraso
invoker.delay(command, 1000 * 3)