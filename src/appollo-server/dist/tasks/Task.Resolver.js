import {TaskModel} from './Task.Model.js';
import tempResolvBuilder from '../Utils/tempResolvBuilder.js';
const runerResult = tempResolvBuilder(TaskModel, 'Task');
export const TaskQueries = runerResult.Queries;
export const TaskMutations = runerResult.Mutations;
