import { RewardModel } from "../models/reward.model.js";
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const RewardTC = composeMongoose(RewardModel, { schemaComposer });

export const RewardQueries = {
    RewardById: RewardTC.mongooseResolvers.findById(),
    RewardOne: RewardTC.mongooseResolvers.findOne(),
    RewardMany: RewardTC.mongooseResolvers.findMany({ filter: { operators: true } })
}

export const RewardMutations = {
    RewardCreateOne: RewardTC.mongooseResolvers.createOne(),
    RewardCreateMany: RewardTC.mongooseResolvers.createMany(),
    RewardUpdateById: RewardTC.mongooseResolvers.updateById(),
    RewardUpdateMany: RewardTC.mongooseResolvers.updateMany(),
    RewardRemoveById: RewardTC.mongooseResolvers.removeById(),
    RewardRemoveMany: RewardTC.mongooseResolvers.removeMany(),
}

