import {UserModel} from './User.Model.js';
import tempResolvBuilder from '../Utils/tempResolvBuilder.js';
const runerResult = tempResolvBuilder(UserModel, 'User');
export const UserQueries = runerResult.Queries;
export const UserMutations = runerResult.Mutations;
