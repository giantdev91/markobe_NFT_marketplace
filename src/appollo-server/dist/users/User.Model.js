import {Schema, model} from 'mongoose';
export const UserSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  passwordHash: {type: String, required: true},
  memberships: [
    {
      type: new Schema({
        project: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Project',
        },
        joinedAt: Date,
      }),
      required: false,
    },
  ],
  achivements: [
    {
      type: new Schema({
        questId: {type: Schema.Types.ObjectId, required: true, ref: 'Quest'},
        reward: {type: Schema.Types.ObjectId, required: true, ref: 'Reward'},
      }),
      required: false,
    },
  ],
});
export const UserModel = model('User', UserSchema);
