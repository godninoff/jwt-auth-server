import mongoose from "mongoose";
import { DB } from "../utils";
import createHttpError from "http-errors";

mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then(() => console.log("db is working fine"))
  .catch(() => {
    throw createHttpError(501, "Не удается подключить базу данных");
  });

const db = mongoose.connection;

module.exports = db;
