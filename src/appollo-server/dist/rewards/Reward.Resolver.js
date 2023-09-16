import {RewardModel} from './Reward.Model.js';
import tempResolvBuilder from '../Utils/tempResolvBuilder.js';
const runerResult = tempResolvBuilder(RewardModel, 'Reward');
export const RewardQueries = runerResult.Queries;
export const RewardMutations = runerResult.Mutations;
