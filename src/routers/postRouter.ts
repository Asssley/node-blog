import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  addPost,
  editPostById,
  deletePostById
} from "../controllers/postController";

export const postRouter: Router = Router();

postRouter.get("/posts", getAllPosts);

postRouter.get("/post:id", getPostById);

postRouter.post("/post", addPost);

postRouter.put("/post:id", editPostById);

postRouter.delete("/post:id", deletePostById);
