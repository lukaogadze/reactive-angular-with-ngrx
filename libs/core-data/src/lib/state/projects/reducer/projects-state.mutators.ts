import { ProjectsState } from './projects-state';
import { Project } from '../../../projects/project.model';

export function projectsLoaded(state: ProjectsState, projecrs: { [key: string]: Project | any }): ProjectsState {
    return {
        ...state,
        errorMessage: undefined,
        projects: {...projecrs}
    };
}

export function projectsFailedToLoad(state: ProjectsState, errorMessage: string): ProjectsState {
    return {
        ...state,
        projects: {},
        errorMessage: errorMessage
    }
}

export function createProject(state: ProjectsState, newProject: Project): ProjectsState {
    const obj: any = {};
    obj[(newProject.id as any)] = newProject;
    return {
        ...state,
        projects: {...state.projects, ...obj}
    };
}

export function updateProject(state: ProjectsState, updatedProject: Project): ProjectsState {
    const projectToUpdate = state.projects[updatedProject.id!];
    const p = {...projectToUpdate, ...updatedProject};
    state.projects[p.id] = p;
    return {
        ...state,
        projects: {...state.projects}
    };
}

export function deleteProject(state: ProjectsState, projectId: string): ProjectsState {
    delete state.projects[projectId];
    return {
        ...state,
        projects: {...state.projects}
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
