import { Database } from "./Database.js";

global.DBConnection = new Database("my-app-db", {
  url: "localhost:5432",
  username: "user",
  password: "password",
});
