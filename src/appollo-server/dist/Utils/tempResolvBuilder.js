import {composeMongoose} from 'graphql-compose-mongoose';
import {schemaComposer} from 'graphql-compose';
export default function buildResolversFromModel(InModel, name) {
  const ModelTC = composeMongoose(InModel, {schemaComposer});
  function adminAccess(resolvers) {
    Object.keys(resolvers).forEach((k) => {
      resolvers[k] = resolvers[k].wrapResolve((next) => async (rp) => {
        // extend resolve params with hook
        rp.beforeRecordMutate = async function(doc, rp) {
          console.log('Inside the wrapper resolver');
          // TODO: Replace with normal validation
          if (!rp.context.token) {
            throw new Error('Forbidden!');
          }
          return doc;
        };
        return next(rp);
      });
    });
    return resolvers;
  }
  const Queries = {
    [`${name}ById`]: ModelTC.mongooseResolvers.findById(),
    // [`${name}ByIds`]: ModelTC.mongooseResolvers.findByIds(),
    [`${name}One`]: ModelTC.mongooseResolvers.findOne(),
    [`${name}Many`]: ModelTC.mongooseResolvers.findMany(),
    // [`${name}DataLoader`]: ModelTC.mongooseResolvers.dataLoader(),
    // [`${name}DataLoaderMany`]: ModelTC.mongooseResolvers.dataLoaderMany(),
    // [`${name}ByIdLean`]: ModelTC.mongooseResolvers.findById({ lean: true }),
    // [`${name}ByIdsLean`]: ModelTC.mongooseResolvers.findByIds({ lean: true }),
    // [`${name}OneLean`]: ModelTC.mongooseResolvers.findOne({ lean: true }),
    // [`${name}ManyLean`]: ModelTC.mongooseResolvers.findMany({ lean: true }),
    // [`${name}DataLoaderLean`]: ModelTC.mongooseResolvers.dataLoader({
    //   lean: true,
    // }),
    // [`${name}DataLoaderManyLean`]: ModelTC.mongooseResolvers.dataLoaderMany({
    //   lean: true,
    // }),
    // [`${name}Count`]: ModelTC.mongooseResolvers.count(),
    // [`${name}Connection`]: ModelTC.mongooseResolvers.connection(),
    // [`${name}Pagination`]: ModelTC.mongooseResolvers.pagination(),
  };
  const Mutations = {
    [`${name}CreateOne`]: ModelTC.mongooseResolvers.createOne(),
    ...adminAccess({
      [`${name}CreateMany`]: ModelTC.mongooseResolvers.createMany(),
    }),
    [`${name}UpdateById`]: ModelTC.mongooseResolvers.updateById(),
    // [`${name}UpdateOne`]: ModelTC.mongooseResolvers.updateOne(),
    [`${name}UpdateMany`]: ModelTC.mongooseResolvers.updateMany(),
    [`${name}RemoveById`]: ModelTC.mongooseResolvers.removeById(),
    // [`${name}RemoveOne`]: ModelTC.mongooseResolvers.removeOne(),
    [`${name}RemoveMany`]: ModelTC.mongooseResolvers.removeMany(),
  };
  return {Queries, Mutations};
}
