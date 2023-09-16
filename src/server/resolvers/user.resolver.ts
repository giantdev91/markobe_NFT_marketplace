import { UserModel } from "../models/user.model.js";
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const UserTC = composeMongoose(UserModel, { schemaComposer });

export const UserQueries = {
    UserById: UserTC.mongooseResolvers.findById(),
    UserOne: UserTC.mongooseResolvers.findOne(),
    UserMany: UserTC.mongooseResolvers.findMany({ filter: { operators: true } })
}

export const UserMutations = {
    UserCreateOne: UserTC.mongooseResolvers.createOne(),
    UserCreateMany: UserTC.mongooseResolvers.createMany(),
    UserUpdateById: UserTC.mongooseResolvers.updateById(),
    UserUpdateMany: UserTC.mongooseResolvers.updateMany(),
    UserRemoveById: UserTC.mongooseResolvers.removeById(),
    UserRemoveMany: UserTC.mongooseResolvers.removeMany(),
}

