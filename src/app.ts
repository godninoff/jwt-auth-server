import express from "express";
import bodyParser from "body-parser";
import createHttpError from "http-errors";
import router from "./routes/user";

import { PORT } from "./utils";
const db = require("./db/index");
import { errorHandler } from "./middleware/errorHanlder";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use("/users/", router);

app.get("/", (req, res) => {
  res.json("Welcome to jwt-auth backend!");
});

app.use(() => {
  throw createHttpError(404, "Страница не найдена");
});

app.use(errorHandler);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
