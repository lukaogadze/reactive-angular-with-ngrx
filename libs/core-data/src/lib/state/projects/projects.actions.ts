import { Project } from '@workshop/core-data';

interface Action<T> {
    readonly type: string
    readonly payload: T
}

export const enum ProjectsActionTypes {
    CreateProject = "[Projects] Create Project",
    UpdateProject = "[Projects] Update Project",
    DeleteProject = "[Projects] Delete Project",
    SelectProject = "[Projects] Select Project",
    ResetSelectedProject = "[Projects] Reset Selected Project"
}

export class CreateProjectAction implements Action<Project> {
    readonly type = ProjectsActionTypes.CreateProject;
    constructor(public readonly payload: Project) { }
}

export class UpdateProjectAction implements Action<Project> {
    readonly type = ProjectsActionTypes.UpdateProject;
    constructor(public readonly payload: Project) { }
}

export class DeleteProjectAction implements Action<string> {
    readonly type = ProjectsActionTypes.DeleteProject;
    constructor(public readonly payload: string) { }
}

export class SelectProjectAction implements Action<string> {
    readonly type = ProjectsActionTypes.SelectProject;
    constructor(public readonly payload: string) { }
}

export class ResetSelectedProjectAction implements Action<undefined> {
    readonly type = ProjectsActionTypes.ResetSelectedProject;
    constructor(public readonly payload = undefined) {}
}



export type ProjectsActions = CreateProjectAction
    | UpdateProjectAction
    | DeleteProjectAction
    | SelectProjectAction
    | ResetSelectedProjectAction;

