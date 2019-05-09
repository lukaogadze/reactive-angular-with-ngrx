import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../../../../libs/core-data/src/lib/projects/project.model';
import { Customer } from '../../../../../../libs/core-data/src/lib/customers/customer.model';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent  {
    originalTitle: string | undefined;
    selectedProject: Project | undefined;
    @Output() readonly saved: EventEmitter<Project>;
    @Output() readonly cancelled: EventEmitter<void>;

    constructor() {
        this.saved = new EventEmitter<Project>();
        this.cancelled = new EventEmitter<void>();
    }

    save(project: Project) {
        this.saved.emit(project)
    }

    cancel() {
        this.cancelled.emit();
    }

    @Input() readonly customers!: Customer[];
    @Input() set project(value: Project) {
        if (value) {
            this.originalTitle = value.title;
        }
        this.selectedProject = Object.assign({}, value);
    }
}
