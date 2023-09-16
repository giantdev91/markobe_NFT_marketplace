import { TaskModel } from "../models/task.model.js";
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const TaskTC = composeMongoose(TaskModel, { schemaComposer });

export const TaskQueries = {
    TaskById: TaskTC.mongooseResolvers.findById(),
    TaskOne: TaskTC.mongooseResolvers.findOne(),
    TaskMany: TaskTC.mongooseResolvers.findMany({ filter: { operators: true } })
}

export const TaskMutations = {
    TaskCreateOne: TaskTC.mongooseResolvers.createOne(),
    TaskCreateMany: TaskTC.mongooseResolvers.createMany(),
    TaskUpdateById: TaskTC.mongooseResolvers.updateById(),
    TaskUpdateMany: TaskTC.mongooseResolvers.updateMany(),
    TaskRemoveById: TaskTC.mongooseResolvers.removeById(),
    TaskRemoveMany: TaskTC.mongooseResolvers.removeMany(),
}

