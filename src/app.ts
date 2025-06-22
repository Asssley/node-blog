import express, {Express} from "express";
import { createPath } from "./utils/createPath";

const PORT = 3000;

const app:Express = express();

console.log(createPath(""));

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(createPath("index.html"));
})

app.use((req, res) => {
  res.sendFile(createPath("errorPage,"));
})

app.listen(PORT, (error) => error ? console.log(error): console.log(`Server listening port ${PORT}`));