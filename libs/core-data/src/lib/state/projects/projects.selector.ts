import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Project, ProjectsState } from '@workshop/core-data';

const getProjectsFeatureState = createFeatureSelector<ProjectsState>('projects');

export const getProjectsSelector = createSelector(
    getProjectsFeatureState,
    state => state.projects
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
            return state.projects.find(x => x.id === selectedProjectId);
        } else {

            const emptyProject: Project = {
                id: undefined,
                title: '',
                details: '',
                percentComplete: 0,
                approved: false,
                customerId: undefined
            };
            return emptyProject;
        }
    }
);
