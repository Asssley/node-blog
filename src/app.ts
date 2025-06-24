import express, { Express } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { createPath } from "./utils/createPath";
import { postRouter } from "./routers/postRouter";

dotenv.config();

mongoose
.connect(process.env.MONGO_URI as string)
.then((res) => console.log("Succesfully conected to DB"))
.catch((err) => console.log(err));

const PORT = 3000;

const app: Express = express();

app.use(express.static("static"));

app.use(express.urlencoded({ extended: false }))

app.use(morgan(':method :url :status - :response-time ms'));

app.get("/", (req, res) => {
  res.render(createPath("index"), {title: "Blog"});
});

app.use(postRouter);

// app.get('/favicon.ico', (req, res) => {
//   res.status(204).end();
// });

// app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
//   res.status(204).end();
// });

app.use((req, res) => {
  res.render(createPath("errorPage"), {title: "Error", errCode: 404, errMessage: "Page Not Found"});
});

app.listen(PORT, (error) => error ? console.log(error) : console.log(`Server listening port ${PORT}`));
