import { ProjectsState } from './projects-state';
import { Project } from '@workshop/core-data';

export function createProject(state: ProjectsState, newProject: Project): ProjectsState {
    return {
        ...state,
        projects: [...state.projects, newProject]
    };
}

export function updateProject(state: ProjectsState, updatedProject: Project): ProjectsState {
    return {
        ...state,
        projects: state.projects.map(x => x.id === updatedProject.id ? updatedProject : x)
    };
}

export function deleteProject(state: ProjectsState, projectId: string): ProjectsState {
    return {
        ...state,
        projects: state.projects.filter(x => x.id !== projectId)
    };
}

export function selectProject(state: ProjectsState, selectedProjectId: string): ProjectsState {
    return {
        ...state,
        selectedProjectId: selectedProjectId
    };
}

export function resetSelectedProject(state: ProjectsState): ProjectsState {
    return {
        ...state,
        selectedProjectId: undefined
    };
}
