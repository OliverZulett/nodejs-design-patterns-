import { promises as fs } from "fs";
import objectPath from "object-path"; //nos ayuda a utilizar la dotted path notation (property subProperty)

export class Config {
  constructor(formatStrategy) {
    this.data = {}; //guarda la informacion de la configuracion
    this.formatStrategy = formatStrategy; // componente que usaremos para parsear y serelaizar la data
  }

  get(configPath) { // obtiene la data
    return objectPath.get(this.data, configPath);
  }

  set(configPath, value) { // setea la data
    return objectPath.set(this.data, configPath, value);
  }

  async load(filePath) {
    console.log(`Deserealizando: ${filePath}`);
    this.data = this.formatStrategy.deserialize(
      await fs.readFile(filePath, "utf-8")
    );
  }

  async save(filePath) {
    console.log(`Serealizando: ${filePath}`);
    await fs.writeFile(filePath, this.formatStrategy.serialize(this.data));
  }
}
