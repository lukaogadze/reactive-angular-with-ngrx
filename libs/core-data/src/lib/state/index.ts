import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomers from './customers/customers.reducer';

export interface AppState {
    customers: fromCustomers.CustomersState
}

export const reducers: ActionReducerMap<AppState> = {
    customers: fromCustomers.customersReducer as any
};

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState = createFeatureSelector<fromCustomers.CustomersState>('customers');

export const selectAllCustomers = createSelector(
    selectCustomersState,
    fromCustomers.selectAllCustomers
);


