import { createPostStatusCmd } from "./createPostStatusCmd.js";
import { Invoker } from "./invoker.js";
import { statusUpdateService } from "./statusUpdateService.js";

const invoker = new Invoker();

const postCmd = createPostStatusCmd(statusUpdateService, "Message");

invoker.run(postCmd);
invoker.undo();

invoker.delay(postCmd, 1000 * 3);
