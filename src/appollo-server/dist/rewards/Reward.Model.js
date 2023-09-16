import {Schema, model} from 'mongoose';
const RewardSchema = new Schema({
  rewardType: {
    type: String,
    enum: ['TOKEN', 'NFT', 'KARMA'],
    default: 'KARMA',
    required: true,
  },
  karmaReward: {type: Number, required: true, default: 10},
  distributionMethod: {
    type: String,
    enum: ['RANDOM', 'FIRST', 'PROJECT'],
    required: true,
  },
  chainData: {
    type: new Schema({
      blockchain: {
        type: String,
        enum: ['ETHEREUM', 'BSC', 'POLYGON', 'AVALANCHE', 'FANTOM'],
      },
      contractAddress: {type: String, required: true},
      amount: {type: Number, required: true},
      name: String,
      description: String,
      collectionName: String,
      collectionToken: String,
      imageUrl: String,
      isDeployed: {type: Boolean, required: true},
    }),
    required: false,
  },
});
export const RewardModel = model('Reward', RewardSchema);
