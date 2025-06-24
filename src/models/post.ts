import { Schema, Model } from "mongoose";

interface IPost {
  title: string,
  text: string,
  date: Date
}

const postSchema: Schema<IPost> = new Schema<IPost>({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true }
});

export const postModel: Model<IPost> = new Model("posts", postSchema);
