import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface INotices extends Document {
  title: string;
  content: string;
  view: number;
  date: string;
}

const NoticesSchema: Schema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  content: {
    type: String,
  },
});

export default mongoose.models.Notices ||
  mongoose.model("Notices", NoticesSchema);
