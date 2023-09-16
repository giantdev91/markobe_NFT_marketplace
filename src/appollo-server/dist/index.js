import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {schemaComposer} from 'graphql-compose';
import './config.js';
import {QuestQueries, QuestMutations} from './quests/Quest.Resolvers.js';
import {UserQueries, UserMutations} from './users/User.Resolver.js';
import {TaskQueries, TaskMutations} from './tasks/Task.Resolver.js';
import AuthTC from './auth/AuthTC.js';
import {ProjectQueries, ProjectMutations} from './projects/Project.Resolver.js';
schemaComposer.Query.addFields(UserQueries);
schemaComposer.Query.addFields(QuestQueries);
schemaComposer.Query.addFields(TaskQueries);
schemaComposer.Query.addFields(ProjectQueries);
schemaComposer.Mutation.addFields(QuestMutations);
schemaComposer.Mutation.addFields(UserMutations);
schemaComposer.Mutation.addFields(TaskMutations);
schemaComposer.Mutation.addFields(ProjectMutations);
schemaComposer.Mutation.addFields({W3Auth: AuthTC.getResolver('SignW3')});
const schema = schemaComposer.buildSchema();
const server = new ApolloServer({schema});
const {url} = await startStandaloneServer(server, {
  listen: {port: 4000},
  context: async ({req}) => {
    const token = req.headers.authorization || '';
    //  MB: const signature = req.headers.signature || undefined;
    return {token};
  },
});
console.log(`🚀  Server ready at: ${url}`);
