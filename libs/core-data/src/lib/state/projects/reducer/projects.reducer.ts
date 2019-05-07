import { ProjectsActions, ProjectsActionTypes } from '../projects.actions';
import * as ProjectsStateMutators from "./projects-state.mutators";
import { ProjectsState } from './projects-state';
import { arrayToKeyValueStore, guid } from '../../../utils/helpers';

const projectArr = [
    {
        id: guid(),
        title: 'Project One',
        details: 'This is a sample project',
        percentComplete: 20,
        approved: false,
        customerId: undefined
    },
    {
        id: guid(),
        title: 'Project Two',
        details: 'This is a sample project',
        percentComplete: 40,
        approved: false,
        customerId: undefined
    },
    {
        id: guid(),
        title: 'Project Three',
        details: 'This is a sample project',
        percentComplete: 100,
        approved: true,
        customerId: undefined
    }
];

const initialState: ProjectsState = {
    projects: arrayToKeyValueStore(projectArr),
    selectedProjectId: undefined
};


export function projectsReducer(state = initialState, action: ProjectsActions): ProjectsState {
    switch (action.type) {
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




















