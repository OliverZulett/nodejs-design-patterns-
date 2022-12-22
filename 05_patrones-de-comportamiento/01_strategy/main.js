import { Config } from "./config.js";
import { iniStrategy, jsonStrategy, yamlStrategy } from "./strategies.js";

async function storeMongoConfig() {
  const iniConfig = new Config(iniStrategy);
  iniConfig.set("mongodb.port", "33452");
  iniConfig.set("mongodb.url", "123.345.434");
  iniConfig.set("mongodb.password", "234jfdshjgy$%&");
  iniConfig.set("mongodb.user", "adminSystem");
  await iniConfig.save("config/config.ini");
}

async function readMongoConfig() {
  const iniConfig = new Config(iniStrategy);
  await iniConfig.load("config/config.ini");
  console.log(`mongodb port: ${iniConfig.get("mongodb.port")}`);
  console.log(`mongodb url: ${iniConfig.get("mongodb.url")}`);
  console.log(`mongodb password: ${iniConfig.get("mongodb.password")}`);
  console.log(`mongodb user: ${iniConfig.get("mongodb.user")}`);
}

async function storePostgresConfig() {
  const jsonConfig = new Config(jsonStrategy);
  jsonConfig.set("postgres.port", "33452");
  jsonConfig.set("postgres.url", "123.345.434");
  jsonConfig.set("postgres.password", "234jfdshjgy$%&");
  jsonConfig.set("postgres.user", "adminSystem");
  await jsonConfig.save("config/config.json");
}

async function readPostgresConfig() {
  const jsonConfig = new Config(jsonStrategy);
  await jsonConfig.load("config/config.json");
  console.log(`postgres port: ${jsonConfig.get("postgres.port")}`);
  console.log(`postgres url: ${jsonConfig.get("postgres.url")}`);
  console.log(`postgres password: ${jsonConfig.get("postgres.password")}`);
  console.log(`postgres user: ${jsonConfig.get("postgres.user")}`);
}

async function storeDockerConfig() {
  const yamlConfig = new Config(yamlStrategy);
  yamlConfig.set("version", "3");
  yamlConfig.set("services.nodejs.image", "nodejs:18");
  yamlConfig.set("services.nodejs.ports", ["80:8080"]);
  yamlConfig.set("services.nodejs.restart", "always");
  await yamlConfig.save("config/docker-compose.yaml");
}

async function readDockerConfig() {
  const yamlConfig = new Config(yamlStrategy);
  await yamlConfig.load("config/docker-compose.yaml");
  console.log(`Docker version: ${yamlConfig.get("version")}`);
  console.log(`Docker image: ${yamlConfig.get("services.nodejs.image")}`);
  console.log(`Docker port: ${yamlConfig.get("services.nodejs.port")}`);
  console.log(`Docker restart: ${yamlConfig.get("services.nodejs.restart")}`);
}

// storeMongoConfig();
// readMongoConfig();

// storePostgresConfig();
// readPostgresConfig();

storeDockerConfig();
readDockerConfig();
