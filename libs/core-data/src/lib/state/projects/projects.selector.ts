import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Project, ProjectsState } from '@workshop/core-data';
import { keyValueStoreToArray } from '../../utils/helpers';

const getProjectsFeatureState = createFeatureSelector<ProjectsState>('projects');


const emptyProject: Project = {
    id: undefined,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
    customerId: undefined
};


export const getProjectsKeyValueSelector = createSelector(
    getProjectsFeatureState,
    state => state.projects
);

export const getProjectArraySelector = createSelector(
    getProjectsFeatureState,
    (state) => keyValueStoreToArray(state.projects)
);

export const getSelectedProjectIdSelector = createSelector(
    getProjectsFeatureState,
    state => state.selectedProjectId
);

export const getSelectedProjectSelector = createSelector(
    getProjectsFeatureState,
    getSelectedProjectIdSelector,
    (state, selectedProjectId) => {
        if (selectedProjectId) {
            const selectedProject = state.projects[selectedProjectId];
            if (selectedProject) {
                return selectedProject;
            } else {
                return emptyProject;
            }
        } else {

            return emptyProject;
        }
    }
);
