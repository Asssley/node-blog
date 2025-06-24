import { Schema, Model, model } from "mongoose";

export interface IPost {
  title: string,
  author: string,
  text: string,
  date: Date
}

const postSchema: Schema<IPost> = new Schema<IPost>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true }
});

export const Post: Model<IPost> = model<IPost>("Post", postSchema);
