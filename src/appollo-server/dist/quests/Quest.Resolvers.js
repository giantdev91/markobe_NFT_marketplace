import {QuestModel} from './Quest.Model.js';
import tempResolvBuilder from '../Utils/tempResolvBuilder.js';
const runerResult = tempResolvBuilder(QuestModel, 'Quest');
export const QuestQueries = runerResult.Queries;
export const QuestMutations = runerResult.Mutations;
