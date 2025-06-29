import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  getnewPostForm,
  addPost,
  getEditPost,
  editPostById,
  deletePostById
} from "../controllers/postController";

export const postRouter: Router = Router();

postRouter.get("/posts", getAllPosts);

postRouter.get("/post/:id", getPostById);

postRouter.get("/new-post", getnewPostForm);

postRouter.get("/edit/:id", getEditPost);

postRouter.post("/post", addPost);

postRouter.put("/edit/:id", editPostById);

postRouter.delete("/delete/:id", deletePostById);
