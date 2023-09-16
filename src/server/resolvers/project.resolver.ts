import { ProjectModel } from "../models/project.model.js";
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const ProjectTC = composeMongoose(ProjectModel, { schemaComposer });

export const ProjectQueries = {
    ProjectById: ProjectTC.mongooseResolvers.findById(),
    ProjectOne: ProjectTC.mongooseResolvers.findOne(),
    ProjectMany: ProjectTC.mongooseResolvers.findMany({ filter: { operators: true } })
}

export const ProjectMutations = {
    ProjectCreateOne: ProjectTC.mongooseResolvers.createOne(),
    ProjectCreateMany: ProjectTC.mongooseResolvers.createMany(),
    ProjectUpdateById: ProjectTC.mongooseResolvers.updateById(),
    ProjectUpdateMany: ProjectTC.mongooseResolvers.updateMany(),
    ProjectRemoveById: ProjectTC.mongooseResolvers.removeById(),
    ProjectRemoveMany: ProjectTC.mongooseResolvers.removeMany(),
}

