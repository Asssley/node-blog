import { Router } from "express";
import { createPath } from "../utils/createPath";

export const postRouter: Router = Router();

postRouter.get("/posts", (req, res) => {
  res.render(createPath("posts"), {title: "Posts"});
});

postRouter.get("/post:id", (req, res) => {

});

postRouter.post("/post", (req, res) => {

});

postRouter.put("/post:id", (req, res) => {

});

postRouter.delete("/post:id", (req, res) => {

});
