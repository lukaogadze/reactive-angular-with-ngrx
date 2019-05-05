import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from '@workshop/core-data';

const getProjectsFeatureState = createFeatureSelector<ProjectsState>("projects");

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
    (state, selectedProjectId) => state.projects.find(x => x.id === selectedProjectId)
);
