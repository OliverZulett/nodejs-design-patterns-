class Database {
  constructor(dbName, connectionDatabase) {}
  //...
}

export const dbConnection = new Database("mongoDB", {
  url: "123.454.657:4534",
  username: "admin",
  password: "pwd",
});

global.dbConnection = new Database("mongoDB", {
  url: "123.454.657:4534",
  username: "admin",
  password: "pwd",
});
