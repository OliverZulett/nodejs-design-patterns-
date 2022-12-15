import { IniConfig } from "./iniConfig.js";
import { JsonConfig } from "./jsonConfig.js";
import { YamlConfig } from "./yamlConfig.js";

async function storeMongoConfig() {
  const iniConfig = new IniConfig();
  await iniConfig.load("config/conf.ini");
  iniConfig.set("mongodb.port", "33452");
  iniConfig.set("mongodb.url", "123.345.434");
  iniConfig.set("mongodb.password", "234jfdshjgy$%&");
  iniConfig.set("mongodb.user", "adminSystem");
  await iniConfig.save("config/conf.ini");
}

async function readMongoConfig() {
  const iniConfig = new IniConfig();
  await iniConfig.load("config/conf.ini");
  console.log(`mongodb port: ${iniConfig.get("mongodb.port")}`);
  console.log(`mongodb url: ${iniConfig.get("mongodb.url")}`);
  console.log(`mongodb password: ${iniConfig.get("mongodb.password")}`);
  console.log(`mongodb user: ${iniConfig.get("mongodb.user")}`);
}

async function storePostgresConfig() {
  const jsonConfig = new JsonConfig();
  await jsonConfig.load("config/conf.json");
  jsonConfig.set("postgres.port", "33452");
  jsonConfig.set("postgres.url", "123.345.434");
  jsonConfig.set("postgres.password", "234jfdshjgy$%&");
  jsonConfig.set("postgres.user", "adminSystem");
  await jsonConfig.save("config/conf.json");
}

async function readPostgresConfig() {
  const jsonConfig = new JsonConfig();
  await jsonConfig.load("config/conf.json");
  console.log(`postgres port: ${jsonConfig.get("postgres.port")}`);
  console.log(`postgres url: ${jsonConfig.get("postgres.url")}`);
  console.log(`postgres password: ${jsonConfig.get("postgres.password")}`);
  console.log(`postgres user: ${jsonConfig.get("postgres.user")}`);
}

async function storeDockerConfig() {
  const yamlConfig = new YamlConfig();
  await yamlConfig.load("config/docker-compose.yaml");
  yamlConfig.set("version", "3");
  yamlConfig.set("services.nodejs.image", "nodejs:18");
  yamlConfig.set("services.nodejs.ports", ["80:8080"]);
  yamlConfig.set("services.nodejs.restart", "always");
  await yamlConfig.save("config/docker-compose.yaml");
}

async function readDockerConfig() {
  const yamlConfig = new YamlConfig();
  await yamlConfig.load("config/docker-compose.yaml");
  console.log(`Docker version: ${yamlConfig.get("version")}`);
  console.log(`Docker image: ${yamlConfig.get("services.nodejs.image")}`);
  console.log(`Docker ports: ${yamlConfig.get("services.nodejs.ports")}`);
  console.log(`Docker restart: ${yamlConfig.get("services.nodejs.restart")}`);
}

// storeMongoConfig();
// readMongoConfig();

// storePostgresConfig();
// readPostgresConfig();

storeDockerConfig();
readDockerConfig();
