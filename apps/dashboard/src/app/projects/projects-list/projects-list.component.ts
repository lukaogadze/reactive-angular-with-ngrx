import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@workshop/core-data';

import { LIST_ANIMATION } from './projects-list.animations';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
    animations: [LIST_ANIMATION]
})
export class ProjectsListComponent implements OnInit {
    @Input() readonly projects!: ReadonlyArray<Project>;
    @Input() readonly: boolean | undefined;
    @Output() selected: EventEmitter<string>;
    @Output() deleted: EventEmitter<string>;
    animationsDisabled: boolean;

    constructor() {
        this.selected = new EventEmitter<string>();
        this.deleted = new EventEmitter<string>();
        this.animationsDisabled = true;
    }

    trackProject(_: any, project: any) {
        return project.id;
    }

    ngOnInit() {
        if (this.readonly === undefined) {
            this.readonly = false;
        }

        setTimeout(() => {
            this.animationsDisabled = false;
        }, 500);
    }

    prepareListState() {
        return this.projects ? this.projects.length : 'pending';
    }

    select(projectId: string) {
        this.selected.emit(projectId);
    }

    delete(projectId: string) {
        this.deleted.emit(projectId);
    }
}
