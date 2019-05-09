import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProjectsService } from '../../projects/projects.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProjectsActionTypes, ProjectsFailedToLoadAction, ProjectsLoadedAction } from './projects.actions';
import { arrayToKeyValueStore } from '../../utils/helpers';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProjectsEffects {
    constructor(private readonly _actions: Actions,
                private readonly _projectsService: ProjectsService) {}

    @Effect()
    readonly loadProjects$ = this._actions.pipe(
        ofType(ProjectsActionTypes.LoadProjects),
        mergeMap(() =>
            this._projectsService.all().pipe(
                map(projects => new ProjectsLoadedAction(arrayToKeyValueStore(projects as any))),
                catchError((err: string) => of(new ProjectsFailedToLoadAction(err)))
            )
        )
    );
}
