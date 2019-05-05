import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomers from './customers/customers.reducer';
import { ProjectsState } from './projects/reducer/projects-state';
import { projectsReducer } from './projects/reducer/projects.reducer';

export interface AppState {
    customers: fromCustomers.CustomersState,
    projects: ProjectsState
}

export const reducers: ActionReducerMap<AppState> = {
    customers: fromCustomers.customersReducer as any,
    projects: projectsReducer as any,
};

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState = createFeatureSelector<fromCustomers.CustomersState>('customers');

export const selectAllCustomers = createSelector(
    selectCustomersState,
    fromCustomers.selectAllCustomers
);


