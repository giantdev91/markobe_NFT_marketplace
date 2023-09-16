import {Schema, model} from 'mongoose';
export const ProjectSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  members: [{type: Schema.Types.ObjectId, ref: 'User'}],
});
export const ProjectModel = model('Project', ProjectSchema);
