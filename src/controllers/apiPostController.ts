import { Request, Response } from "express";
import { Post, IPost } from "../models/post";

const errorHandler = (res: Response, error: Error, errCode: number, errMessage: string) => {
  console.log(error);
  // TODO: return error json 
  res.json();
}

export const getAllPosts = (req: Request, res: Response) => {
  Post
    .find()
    .sort({ date: -1 })
    .then((posts: IPost[]) => res.json(posts))
    .catch((err: Error) => errorHandler(res, err, 500, "Internal server error"));
}

export const getPostById = (req: Request, res: Response) => {
  const id: string = req.params.id;

  Post
    .findById(id)
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