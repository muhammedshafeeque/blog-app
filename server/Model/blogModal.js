import mongoose from "mongoose";
import { collections } from "../Constants/constant.js";

const BlogModal = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags:{ type: String },
    author:{ type: String }
  },
  {
    timestamps: true,
  }
);
export const BLOG = mongoose.model(
  collections.BLOG_COLLECTIONS,
  BlogModal
);
