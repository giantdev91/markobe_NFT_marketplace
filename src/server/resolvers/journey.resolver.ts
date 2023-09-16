import { JourneyModel } from "../models/journey.model.js";
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const JourneyTC = composeMongoose(JourneyModel, { schemaComposer });

export const JourneyQueries = {
    JourneyById: JourneyTC.mongooseResolvers.findById(),
    JourneyOne: JourneyTC.mongooseResolvers.findOne(),
    JourneyMany: JourneyTC.mongooseResolvers.findMany({ filter: { operators: true } })
}

export const JourneyMutations = {
    JourneyCreateOne: JourneyTC.mongooseResolvers.createOne(),
    JourneyCreateMany: JourneyTC.mongooseResolvers.createMany(),
    JourneyUpdateById: JourneyTC.mongooseResolvers.updateById(),
    JourneyUpdateMany: JourneyTC.mongooseResolvers.updateMany(),
    JourneyRemoveById: JourneyTC.mongooseResolvers.removeById(),
    JourneyRemoveMany: JourneyTC.mongooseResolvers.removeMany(),
}

