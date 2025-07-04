import express, { Express } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import methodOverride from "method-override";
import * as dotenv from "dotenv";
import { createPath } from "./utils/createPath";
import { postRouter } from "./routers/postRouter";
import { apiPostRouter } from "./routers/apiPostRouter";

dotenv.config();

mongoose
.connect(process.env.MONGO_URI as string)
.then((res) => console.log("Succesfully conected to DB"))
.catch((err) => console.log(err));

const PORT = 3000;

const app: Express = express();

app.use(express.static("static"));

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method"));

app.use(morgan(':method :url :status - :response-time ms'));

app.get("/", (req, res) => {
  res.render(createPath("index"), {title: "Blog"});
});

app.use(postRouter);

app.use(apiPostRouter);

app.use((req, res) => {
  res.status(404).render(createPath("errorPage"), {title: "Error", errCode: 404, errMessage: "Page Not Found"});
});

app.listen(PORT, (error) => error ? console.log(error) : console.log(`Server listening port ${PORT}`));
  