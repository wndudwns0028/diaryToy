import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
}

const UserSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const UserModel: Model<IUser> = mongoose.model<IUser>("users", UserSchema);

export default UserModel;
