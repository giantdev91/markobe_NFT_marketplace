import {Schema, model} from 'mongoose';
export const TaskSchema = new Schema({
  taskType: {
    type: String,
    enum: ['Off-chain', 'Quizz', 'On-chain'],
    required: true,
  },
  subcategory: {
    type: String,
    // enum: ["Twitter", "Medium", "YouTube", "Documentation", "DeFi", "Event"],
    required: true,
  },
  action: {
    type: new Schema({
      actionName: {type: String, required: true},
      actionSpecialFields: [{type: String}],
    }),
    required: true,
  },
  description: String,
});
export const TaskModel = model('Task', TaskSchema);
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
