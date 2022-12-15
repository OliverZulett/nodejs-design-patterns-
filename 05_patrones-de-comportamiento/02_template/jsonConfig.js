import { ConfigTemplate } from "./configTemplate.js";

export class JsonConfig extends ConfigTemplate {
  _deserialize(data) {
    if (!data) {
      return JSON.parse('{}')
    }
    return JSON.parse(data);
  }

  _serialize(data) {
    return JSON.stringify(data, null, "   ");
  }
}
