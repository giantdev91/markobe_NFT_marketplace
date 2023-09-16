import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  category: String;
  subcategory: String;
  action: IAction; // TODO: MB move to object
  description?: String;
  // ?quests
}
interface IAction {
  actionName: String;
  actionSpecialFields?: String[];
}

export const TaskSchema = new Schema<ITask>({
  category: {
    type: String,
    enum: ["Off-chain", "Quizz", "On-chain"], // Acivity -> Governance
    required: true,
  },
  subcategory: {
    type: String,
    enum: ["Twitter", "Medium", "YouTube", "Documentation", "DeFi", "Event"],
    required: true,
  },
  action: {
    type: new Schema<IAction>({
      actionName: { type: String, required: true },
      actionSpecialFields: [{ type: String }],
    }),
    required: true,
  },
  description: String,
});
export const TaskModel = model<ITask>("Task", TaskSchema);

// taskType: {
//   type: String,
//   enum: ["Social", "Educational", "Technical", "Governance"], // Acivity -> Governance
//   required: true,
// },
// subcategory: {
//   type: String,
//   enum: ["Twitter", "Medium", "YouTube", "Documentation", "DeFi", "Event"],
//   required: true,
// },
// action: { type: String, required: true },
// description: String,
// });
