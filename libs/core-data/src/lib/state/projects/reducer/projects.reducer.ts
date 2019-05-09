import { ProjectsActions, ProjectsActionTypes } from '../projects.actions';
import * as ProjectsStateMutators from "./projects-state.mutators";
import { ProjectsState } from './projects-state';


const initialState: ProjectsState = {
    errorMessage: undefined,
    projects: {},
    selectedProjectId: undefined
};


export function projectsReducer(state = initialState, action: ProjectsActions): ProjectsState {
    switch (action.type) {

        case ProjectsActionTypes.ProjectsLoaded:
            return ProjectsStateMutators.projectsLoaded(state, action.payload);

        case ProjectsActionTypes.ProjectsFailedToLoad:
            return ProjectsStateMutators.projectsFailedToLoad(state, action.payload);

        case ProjectsActionTypes.SelectProject:
            return ProjectsStateMutators.selectProject(state, action.payload);

        case ProjectsActionTypes.CreateProject:
            return ProjectsStateMutators.createProject(state, action.payload);

        case ProjectsActionTypes.UpdateProject:
            return ProjectsStateMutators.updateProject(state, action.payload);

        case ProjectsActionTypes.DeleteProject:
            return ProjectsStateMutators.deleteProject(state, action.payload);

        case ProjectsActionTypes.ResetSelectedProject:
            return ProjectsStateMutators.resetSelectedProject(state);

        default:
            return state;
    }
}




















