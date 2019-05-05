import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export const enum ProjectsActionTypes  {
    CreateProject = "[Projects] Create Project",
    UpdateProject = "[Projects] Update Project",
    DeleteProject = "[Projects] Delete Project",
    SelectProject = "[Projects] Select Project"
}

export class CreateProjectAction implements Action {
    readonly type = ProjectsActionTypes.CreateProject;
    constructor(public readonly payload: Project) {}
}

export class UpdateProjectAction implements Action {
    readonly type = ProjectsActionTypes.UpdateProject;
    constructor(public readonly payload: Project) {}
}

export class DeleteProjectAction implements Action {
    readonly type = ProjectsActionTypes.DeleteProject;
    constructor(public readonly payload: string) {}
}

export class SelectProjectAction implements Action {
    readonly type = ProjectsActionTypes.SelectProject;
    constructor(public readonly payload: string) {}
}



export type ProjectsActions = CreateProjectAction
    | UpdateProjectAction
    | DeleteProjectAction
    | SelectProjectAction;
