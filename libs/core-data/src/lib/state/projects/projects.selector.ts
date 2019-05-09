import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Project, ProjectsState } from '@workshop/core-data';
import { keyValueStoreToArray } from '../../utils/helpers';

const getProjectsFeatureState = createFeatureSelector<ProjectsState>('projects');


const p: Project = {
    id: undefined,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
    customerId: undefined
};

const emptyProject = () => ({...p});


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
    getProjectsKeyValueSelector,
    getSelectedProjectIdSelector,
    (projects, selectedProjectId) => {
        if (selectedProjectId) {
            const selectedProject = projects[selectedProjectId];
            if (selectedProject) {
                return selectedProject;
            } else {
                return emptyProject();
            }
        } else {
            return emptyProject();
        }
    }
);
