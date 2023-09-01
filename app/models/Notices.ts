import { ObjectId } from "mongodb";
import mongoose, { Document, model, Model, Schema } from "mongoose";
import { models } from "mongoose";

export interface INotices extends Document {
  title: string;
  content: string;
  views: number;
  date: string;
}

const NoticesSchema: Schema = new mongoose.Schema(
  {
    _id: { type: ObjectId, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    views: { type: Number, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Notice =
  models.Notice || mongoose.model("Notice", NoticesSchema, "notice");
export const getAllNotices = async () => {
  const notices = await Notice.find();
  return notices;
};
