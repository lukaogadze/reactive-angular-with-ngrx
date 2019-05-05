import { Project } from '@workshop/core-data';

export interface ProjectsState {
    readonly projects: ReadonlyArray<Project>,
    selectedProjectId: string | undefined
}
