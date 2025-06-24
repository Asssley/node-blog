import { Request, Response } from "express";
import { Post, IPost } from "../models/post";
import { createPath } from "../utils/createPath";

const errorHandler = (res: Response, error: Error, errCode: number, errMessage: string) => {
  console.log(error);
  res.render(createPath("errorPage"), { title: "Error", errCode, errMessage })
}

export const getAllPosts = (req: Request, res: Response) => {
  Post
    .find()
    .sort({ date: -1 })
    .then((posts: IPost[]) => res.render(createPath("posts"), { title: "Posts", posts}))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const getPostById = (req: Request, res: Response) => {
  Post
    .findById(req.params.id)
    .then((post: IPost | null) => res.json(post))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const addPost = (req: Request, res: Response) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text, date: new Date });
  post
    .save()
    .then((newPost) => res.json(newPost))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const editPostById = (req: Request, res: Response) => {

}

export const deletePostById = (req: Request, res: Response) => {

}