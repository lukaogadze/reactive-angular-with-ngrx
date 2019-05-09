import { Project } from '../../../projects/project.model';

export interface ProjectsState {
    readonly projects: {[key: string]: Project | any},
    selectedProjectId: string | undefined,
    errorMessage: string | undefined
}
