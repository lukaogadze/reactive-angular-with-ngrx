import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Customer, Project, ProjectsService, NotificationsService, CustomersService } from '@workshop/core-data';

const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
    customerId: null
};

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects$: Observable<Project[]> | undefined;
    customers$: Observable<Customer[]> | undefined;
    currentProject: Project | undefined;

    constructor(
        private projectsService: ProjectsService,
        private customerService: CustomersService,
        private ns: NotificationsService) {
    }

    ngOnInit() {
        this.getProjects();
        this.getCustomers();
        this.resetCurrentProject();
    }

    resetCurrentProject() {
        this.currentProject = emptyProject;
    }

    selectProject(project: any) {
        this.currentProject = project;
    }

    cancel() {
        this.resetCurrentProject();
    }

    getCustomers() {
        this.customers$ = this.customerService.all();
    }

    getProjects() {
        this.projects$ = this.projectsService.all();
    }

    saveProject(project: any) {
        if (!project.id) {
            this.createProject(project);
        } else {
            this.updateProject(project);
        }
    }

    createProject(project: any) {
        this.projectsService.create(project)
            .subscribe(() => {
                this.ns.emit('Project created!');
                this.getProjects();
                this.resetCurrentProject();
            });
    }

    updateProject(project: any) {
        this.projectsService.update(project)
            .subscribe(() => {
                this.ns.emit('Project saved!');
                this.getProjects();
                this.resetCurrentProject();
            });
    }

    deleteProject(project: any) {
        this.projectsService.delete(project)
            .subscribe(() => {
                this.ns.emit('Project deleted!');
                this.getProjects();
                this.resetCurrentProject();
            });
    }
}

