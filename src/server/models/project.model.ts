import { Schema, model, Document, Types } from "mongoose";

export interface IProject extends Document {
  name: String;
  description?: String;
  creator: Types.ObjectId;
  members?: Types.ObjectId[];
}
export const ProjectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: String,
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
export const ProjectModel = model<IProject>("Project", ProjectSchema);
