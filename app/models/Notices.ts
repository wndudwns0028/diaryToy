import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface INotices extends Document {
  title: string;
  content: string;
  views: number;
  date: string;
}

const NoticesSchema: Schema = new Schema(
  {
    title: String,
    content: String,
    views: Number,
    date: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Notices ||
  mongoose.model("Notices", NoticesSchema);
