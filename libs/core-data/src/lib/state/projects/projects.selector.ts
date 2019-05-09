import { createFeatureSelector, createSelector } from '@ngrx/store';
import { keyValueStoreToArray } from '../../utils/helpers';
import { ProjectsState } from './reducer/projects-state';
import { Project } from '../../projects/project.model';

const getProjectsFeatureState = createFeatureSelector<ProjectsState>('projects');


const p: Project = {
    id: undefined,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
    customerId: undefined,
    completionDate: undefined,
    startDate: undefined,
    targetDate: "",
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

export const getErrorMessageSelector = createSelector(
    getProjectsFeatureState,
    state => state.errorMessage
);
