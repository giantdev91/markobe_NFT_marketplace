import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const url = "mongodb://localhost:27017/graphqldb";
// mongodb://mongo:27017/graphqldb

mongoose.connect(url);
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
