import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Customer } from '../../customers/customer.model';
import { CustomersService } from '../../customers/customers.service';
import { CustomersActionTypes, CustomersLoaded, LoadCustomers } from './customers.actions';
import { CustomersState } from './customers.reducer';

@Injectable()
export class CustomersEffects {
    constructor(private readonly _dataPersistence: DataPersistence<CustomersState>,
                private readonly _customersService: CustomersService
    ) {}

    @Effect()
    loadCustomers$ = this._dataPersistence.fetch(CustomersActionTypes.LoadCustomers, {
        run: () => {
            return this._customersService.all().pipe(map((res: Customer[]) => new CustomersLoaded(res)));
        },

        onError: (_: LoadCustomers, error) => {
            console.error('Error', error);
        }
    });

}
