import { schemaComposer } from "graphql-compose";

import { ProjectQueries, ProjectMutations } from "../resolvers/project.resolver.js";
import { QuestQueries, QuestMutations } from "../resolvers/quest.resolver.js";
import { RewardQueries, RewardMutations } from "../resolvers/reward.resolver.js";
import { TaskQueries, TaskMutations } from "../resolvers/task.resolver.js";
import { UserQueries, UserMutations } from "../resolvers/user.resolver.js";
import { JourneyQueries, JourneyMutations } from "../resolvers/journey.resolver.js";

schemaComposer.Query.addFields(ProjectQueries);
schemaComposer.Query.addFields(QuestQueries);
schemaComposer.Query.addFields(RewardQueries);
schemaComposer.Query.addFields(TaskQueries);
schemaComposer.Query.addFields(UserQueries);
schemaComposer.Query.addFields(JourneyQueries);

schemaComposer.Mutation.addFields(ProjectMutations);
schemaComposer.Mutation.addFields(QuestMutations);
schemaComposer.Mutation.addFields(RewardMutations);
schemaComposer.Mutation.addFields(TaskMutations);
schemaComposer.Mutation.addFields(UserMutations);
schemaComposer.Mutation.addFields(JourneyMutations);

export const schema = schemaComposer.buildSchema();