import { Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../../libs/core-data/src/lib/state';
import {
    getErrorMessageSelector,
    getProjectArraySelector,
    getSelectedProjectSelector
} from '../../../../../libs/core-data/src/lib/state/projects/projects.selector';
import {
    CreateProjectAction, DeleteProjectAction, LoadProjectsAction, ResetSelectedProjectAction, SelectProjectAction,
    UpdateProjectAction
} from '../../../../../libs/core-data/src/lib/state/projects/projects.actions';
import { guid } from '../../../../../libs/core-data/src/lib/utils/helpers';
import { Project } from '../../../../../libs/core-data/src/lib/projects/project.model';
import { Customer } from '../../../../../libs/core-data/src/lib/customers/customer.model';
import { CustomersService } from '../../../../../libs/core-data/src/lib/customers/customers.service';
import { NotificationsService } from '../../../../../libs/core-data/src/lib/notifications/notifications.service';




@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects$!: Observable<ReadonlyArray<Project>>;
    customers$: Observable<Customer[]> | undefined;
    currentProject$: Observable<Project | undefined> | undefined;
    errorMessage$!: Observable<string | undefined>;

    constructor(private readonly _customerService: CustomersService,
                private readonly _notificationsService: NotificationsService,
                private readonly _store: Store<AppState>) {
    }

    ngOnInit() {
        this.projects$ = this._store.pipe(select(getProjectArraySelector));
        this.currentProject$ = this._store.pipe(select(getSelectedProjectSelector));
        this.errorMessage$ = this._store.pipe(select(getErrorMessageSelector));
        this.getCustomers();
        this.getProjects();
        this.errorMessage$.subscribe(message => {
            if (message) {
                this._notificationsService.emit(message);
            }
        });
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

    private getProjects() {
        this._store.dispatch(new LoadProjectsAction());
    }
}

