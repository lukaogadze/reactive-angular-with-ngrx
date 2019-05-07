import { Project } from '@workshop/core-data';

export interface ProjectsState {
    readonly projects: {[key: string]: Project | any},
    selectedProjectId: string | undefined
}
