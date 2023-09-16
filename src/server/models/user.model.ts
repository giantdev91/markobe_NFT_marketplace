import { Schema, model, Document, Types } from "mongoose";
import { IProject } from "./project.model.js";
interface IAchivement {
  questId: Types.ObjectId;
  reward: Types.ObjectId;
  completedAt: Date;
}
interface IMembership {
  project: IProject;
  // role: String;
  joinedAt: Date;
}
export interface IUser extends Document {
  username: String;
  email: String;
  passwordHash: String;
  memberships?: IMembership[];
  achivements?: IAchivement[];
}
export const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  memberships: [
    {
      type: new Schema<IMembership>({
        project: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Project",
        },
        joinedAt: Date,
      }),
      required: false,
    },
  ],
  achivements: [
    {
      type: new Schema<IAchivement>({
        questId: { type: Schema.Types.ObjectId, required: true, ref: "Quest" },
        reward: { type: Schema.Types.ObjectId, required: true, ref: "Reward" },
      }),
      required: false,
    },
  ],
});
export const UserModel = model<IUser>("User", UserSchema);
