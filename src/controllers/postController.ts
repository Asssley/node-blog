import { Request, Response } from "express";
import { Post, IPost } from "../models/post";
import { createPath } from "../utils/createPath";

const errorHandler = (res: Response, error: Error, errCode: number, errMessage: string) => {
  console.log(error);
  res.status(errCode).render(createPath("errorPage"), { title: "Error", errCode, errMessage });
}

export const getAllPosts = (req: Request, res: Response) => {
  Post
    .find()
    .sort({ date: -1 })
    .then((posts: IPost[]) => res.render(createPath("posts"), { title: "Posts", posts }))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const getPostById = (req: Request, res: Response) => {
  Post
    .findById(req.params.id)
    .then((post: IPost | null) => res.render(createPath("post"), { title: "Post", post }))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const getnewPostForm = (req: Request, res: Response) => {
  res.render(createPath("newPostForm"), { title: "Add post" });
}

export const addPost = (req: Request, res: Response) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text, date: new Date });
  post
    .save()
    .then(() => res.redirect("/posts"))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const getEditPost = (req: Request, res: Response) => {
  Post
    .findById(req.params.id)
    .then((post: IPost | null) => res.render(createPath("edit"), { title: "Edit", post }))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const editPostById = (req: Request, res: Response) => {
  const { title, author, text } = req.body;

  Post
    .findByIdAndUpdate(req.params.id, { title, author, text }, { new: true })
    .then(() => res.redirect(`/post/${req.params.id}`))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const deletePostById = (req: Request, res: Response) => {
  Post
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}