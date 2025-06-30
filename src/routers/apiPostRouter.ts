import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  addPost,
  editPostById,
  deletePostById,
  apiError
} from "../controllers/apiPostController";

export const apiPostRouter: Router = Router();

apiPostRouter.get("/api/posts", getAllPosts);

apiPostRouter.get("/api/post/:id", getPostById);

apiPostRouter.post("/api/post", addPost);

apiPostRouter.put("/api/edit/:id", editPostById);

apiPostRouter.delete("/api/delete/:id", deletePostById);

apiPostRouter.use(apiError);