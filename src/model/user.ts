import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  userVerified: boolean;
}

const UserSchema: Schema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  userVerified: { type: Boolean, default: false },
});

export default model<IUser>("User", UserSchema);
