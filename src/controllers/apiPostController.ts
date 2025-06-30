import { Request, Response } from "express";
import { Post, IPost } from "../models/post";

const errorHandler = (res: Response, error: Error, errCode: number) => {
  console.log(error);
  res.sendStatus(errCode);
}

export const getAllPosts = (req: Request, res: Response) => {
  Post
    .find()
    .sort({ date: -1 })
    .then((posts: IPost[]) => res.json(posts))
    .catch((err: Error) => errorHandler(res, err, 500));
}

export const getPostById = (req: Request, res: Response) => {
  const id: string = req.params.id;

  Post
    .findById(id)
    .then((post: IPost | null) => res.json(post))
    .catch((err: Error) => errorHandler(res, err, 500));
}

export const addPost = (req: Request, res: Response) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text, date: new Date });

  post
    .save()
    .then((newPost: IPost) => res.json(newPost))
    .catch((err: Error) => errorHandler(res, err, 500));
}

export const editPostById = (req: Request, res: Response) => {
  const { title, author, text } = req.body;

  Post
    .findByIdAndUpdate(req.params.id, { title, author, text }, { new: true })
    .then((editedPost: IPost | null) => res.json(req.params.id))
    .catch((err: Error) => errorHandler(res, err, 500));
}

export const deletePostById = (req: Request, res: Response) => {
  Post
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((err: Error) => errorHandler(res, err, 500));
}

export const apiError = (req: Request, res: Response) => {
  res.sendStatus(404);
}