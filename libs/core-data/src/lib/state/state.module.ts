import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/nx';

import { StoreModule } from '@ngrx/store';
import { reducers } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './customers/customers.effects';
import { ProjectsEffects } from './projects/projects.effects';

@NgModule({
    imports: [
        CommonModule,
        NxModule.forRoot(),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({ maxAge: 10 }),
        EffectsModule.forRoot([
            CustomersEffects,
            ProjectsEffects
        ])
    ],
    declarations: []
})
export class StateModule {
}
