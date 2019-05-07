import { Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
    Customer,
    Project,
    NotificationsService,
    CustomersService
} from '@workshop/core-data';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../../libs/core-data/src/lib/state';
import {
    getProjectsSelector,
    getSelectedProjectSelector
} from '../../../../../libs/core-data/src/lib/state/projects/projects.selector';
import {
    CreateProjectAction, DeleteProjectAction, ResetSelectedProjectAction, SelectProjectAction,
    UpdateProjectAction
} from '../../../../../libs/core-data/src/lib/state/projects/projects.actions';
import { guid } from '../../../../../libs/core-data/src/lib/utils/guid';




@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects$: Observable<ReadonlyArray<Project>> | undefined;
    customers$: Observable<Customer[]> | undefined;
    currentProject$: Observable<Project | undefined> | undefined;

    constructor(private readonly _customerService: CustomersService,
                private readonly _notificationsService: NotificationsService,
                private readonly _store: Store<AppState>) {
    }

    ngOnInit() {
        this.projects$ = this._store.pipe(select(getProjectsSelector));
        this.currentProject$ = this._store.pipe(select(getSelectedProjectSelector));
        this.getCustomers();
    }

    resetCurrentProject() {
        this._store.dispatch(new ResetSelectedProjectAction());
    }

    selectProject(projectId: string) {
        this._store.dispatch(new SelectProjectAction(projectId));
    }


    getCustomers() {
        this.customers$ = this._customerService.all();
    }


    saveProject(project: Project): void {
        if (!project.id) {
            this.createProject(project);
        } else {
            this.updateProject(project);
        }
    }

    createProject(project: Project): void {
        project.id = guid();
        this._store.dispatch(new CreateProjectAction(project));

        // TODO: REFACTOR!
        this._notificationsService.emit('Project created!');
        this.resetCurrentProject();


    }

    updateProject(project: Project): void {
        this._store.dispatch(new UpdateProjectAction(project));

        // TODO: REFACTOR!
        this._notificationsService.emit('Project saved!');
        this.resetCurrentProject();
    }

    deleteProject(projectId: string): void {
        this._store.dispatch(new DeleteProjectAction(projectId));

        // TODO: REFACTOR!
        this._notificationsService.emit('Project deleted!');
        this.resetCurrentProject();
    }
}

