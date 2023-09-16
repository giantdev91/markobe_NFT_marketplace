import {Schema, model} from 'mongoose';
export const QuestSchema = new Schema({
  title: String,
  image: String,
  description: String,
  status: {
    type: String,
    enum: ['DRAFT', 'ACTIVE', 'COMPLETED', 'EXPIRED'],
    required: true,
    // TODO: Add post hook to disallow activation without reward
  },
  startDate: Date,
  endDate: Date,
  project: {type: Schema.Types.ObjectId, required: true, ref: 'Project'},
  rewards: [{type: Schema.Types.ObjectId, required: true, ref: 'Reward'}],
  eligibility: new Schema({
    eligibilityType: {
      type: String,
      enum: ['ALL_USERS', 'NFT_HOLDERS', 'TOKEN_HOLDERS', 'DISCORD_ROLES'],
      required: true,
      default: 'ALL_USERS',
    },
    network: {
      type: String,
      required: function() {
        return (this.eligibilityType === 'NFT_HOLDERS' ||
                    this.eligibilityType === 'TOKEN_HOLDERS');
      },
    },
    contractAddress: {
      type: String,
      required: function() {
        return (this.eligibilityType === 'NFT_HOLDERS' ||
                    this.eligibilityType === 'TOKEN_HOLDERS');
      },
    },
    tokenAmount: {
      type: String,
      required: function() {
        return this.eligibilityType === 'TOKEN_HOLDERS';
      },
    },
    channelId: {
      type: String,
      required: function() {
        return this.eligibilityType === 'DISCORD_ROLES';
      },
      roleType: {
        type: String,
        enum: ['SOCIAL', 'ACTIVITY', 'TECHNICAL', 'EDUCATIONAL'],
      },
    },
  }),
  // ///////////////----Recurence------/////////////////////
  // isRecurrent: { type: Boolean, default: false },
  // recurrenceInterval: String,
});
export const QuestModel = model('Quest', QuestSchema);
