import { Schema, model, Document, Types } from "mongoose";

interface IChainData {
  blockchain: {
    type: String;
    enum: ["ETHEREUM", "BSC", "POLYGON", "AVALANCHE", "FANTOM"];
  };
  contractAddress: String;
  amount: Number;
  name?: String;
  description?: String;
  collectionName?: String;
  collectionToken?: String;
  imageUrl?: String;
  isDeployed: Boolean;
}
export interface IReward extends Document {
  rewardType: String;
  karmaReward: Number;
  distributionMethod: String;
  chainData?: IChainData;
}

const RewardSchema = new Schema<IReward>({
  rewardType: {
    type: String,
    enum: ["TOKEN", "NFT", "KARMA"],
    default: "KARMA",
    required: true,
  },
  karmaReward: { type: Number, required: true, default: 10 },
  distributionMethod: {
    type: String,
    enum: ["RANDOM", "FIRST", "PROJECT"],
    required: true,
  },
  chainData: {
    type: new Schema<IChainData>({
      blockchain: {
        type: String,
        enum: ["ETHEREUM", "BSC", "POLYGON", "AVALANCHE", "FANTOM"],
      },
      contractAddress: { type: String, required: true },
      amount: { type: Number, required: true },
      name: String,
      description: String,
      collectionName: String,
      collectionToken: String,
      imageUrl: String,
      isDeployed: { type: Boolean, required: true },
    }),
    required: false,
  },
});
export const RewardModel = model<IReward>("Reward", RewardSchema);
