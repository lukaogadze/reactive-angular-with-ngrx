import { Project } from '../../projects/project.model';

interface Action<T> {
    readonly type: string
    readonly payload: T
}

export const enum ProjectsActionTypes {
    LoadProjects = "[Projects] Load Projects",
    ProjectsLoaded = "[Projects] Projects Loaded",
    ProjectsFailedToLoad = "[Projects] Projects Failed ToLoad",
    CreateProject = "[Projects] Create Project",
    UpdateProject = "[Projects] Update Project",
    DeleteProject = "[Projects] Delete Project",
    SelectProject = "[Projects] Select Project",
    ResetSelectedProject = "[Projects] Reset Selected Project"
}

export class LoadProjectsAction implements Action<undefined> {
    readonly type = ProjectsActionTypes.LoadProjects;
    constructor(public readonly payload = undefined) {}
}

export class ProjectsLoadedAction implements Action<{[key: string]: Project | any}> {
    readonly type = ProjectsActionTypes.ProjectsLoaded;
    constructor(public readonly payload: {[key: string]: Project | any}) { }
}

export class ProjectsFailedToLoadAction implements Action<string> {
    readonly type = ProjectsActionTypes.ProjectsFailedToLoad;
    constructor(public readonly payload: string) { }
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



export type ProjectsActions =
    | ProjectsLoadedAction
    | ProjectsFailedToLoadAction
    | CreateProjectAction
    | UpdateProjectAction
    | DeleteProjectAction
    | SelectProjectAction
    | ResetSelectedProjectAction;

