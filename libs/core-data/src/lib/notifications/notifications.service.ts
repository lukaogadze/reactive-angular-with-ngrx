import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationsService {

    constructor(private readonly _snackbar: MatSnackBar) {
    }

    emit(notification: any) {
        this._snackbar.open(notification, 'OK', { duration: 3000 });
    }
}
