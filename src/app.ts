import express, { Express } from "express";
import morgan from "morgan";
import { createPath } from "./utils/createPath";

const PORT = 3000;

const app: Express = express();

app.use(express.static("static"));

app.use(express.urlencoded({ extended: false }))

app.use(morgan(':method :url :status - :response-time ms'));

app.get("/", (req, res) => {
  res.sendFile(createPath("index"));
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(204).end();
});


app.use((req, res) => {
  res.sendFile(createPath("errorPage"));
});

app.listen(PORT, (error) => error ? console.log(error) : console.log(`Server listening port ${PORT}`));