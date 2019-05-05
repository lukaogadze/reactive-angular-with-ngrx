import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer, Project } from '@workshop/core-data';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
    originalTitle: string | undefined;
    selectedProject: Project | undefined;
    @Output() saved = new EventEmitter();
    @Output() cancelled = new EventEmitter();

    @Input() readonly customers!: Customer[];

    @Input() set project(value: Project) {
        if (value) {
            this.originalTitle = value.title;
        }
        this.selectedProject = Object.assign({}, value);
    }
}
