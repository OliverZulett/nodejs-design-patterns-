import { promises as fsPromises } from "fs";
import objectPath from "object-path";

export class ConfigTemplate {
  async load(file) {
    console.log(`Deserealizando: ${file}`);
    this.data = this._deserialize(await fsPromises.readFile(file, "utf-8"));
  }

  async save(file) {
    console.log(`Serealizando: ${file}`);
    await fsPromises.writeFile(file, this._serialize(this.data));
  }

  get(path) {
    return objectPath.get(this.data, path);
  }

  set(path, value) {
    console.log(this.data, path, value);
    return objectPath.set(this.data, path, value);
  }

  _serialize() { // la _ indica que son metodos de uso interno (metodos protected)
    throw new Error("metodo no implementado: _serialize()");
  }

  _deserialize() {
    throw new Error("metodo no implementado: _deserialize()");
  }
}
