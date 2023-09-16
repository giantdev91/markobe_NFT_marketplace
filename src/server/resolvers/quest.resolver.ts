import { QuestModel } from "../models/quest.model.js";
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const QuestTC = composeMongoose(QuestModel, { schemaComposer });

export const QuestQueries = {
    QuestById: QuestTC.mongooseResolvers.findById(),
    QuestOne: QuestTC.mongooseResolvers.findOne(),
    QuestMany: QuestTC.mongooseResolvers.findMany({ filter: { operators: true } })
}

export const QuestMutations = {
    QuestCreateOne: QuestTC.mongooseResolvers.createOne(),
    QuestCreateMany: QuestTC.mongooseResolvers.createMany(),
    QuestUpdateById: QuestTC.mongooseResolvers.updateById(),
    QuestUpdateMany: QuestTC.mongooseResolvers.updateMany(),
    QuestRemoveById: QuestTC.mongooseResolvers.removeById(),
    QuestRemoveMany: QuestTC.mongooseResolvers.removeMany(),
}

