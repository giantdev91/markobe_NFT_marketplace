import {ProjectModel} from './Project.Model.js';
import tempResolvBuilder from '../Utils/tempResolvBuilder.js';
const runerResult = tempResolvBuilder(ProjectModel, 'Project');
export const ProjectQueries = runerResult.Queries;
export const ProjectMutations = runerResult.Mutations;
