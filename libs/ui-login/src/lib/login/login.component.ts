import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core-data/src/lib/auth/auth.service';

@Component({
    selector: 'ui-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    filters = [
        'ig-xpro2',
        'ig-willow',
        'ig-walden',
        'ig-valencia',
        'ig-toaster',
        'ig-sutro',
        'ig-sierra',
        'ig-rise',
        'ig-nashville',
        'ig-mayfair',
        'ig-lofi',
        'ig-kelvin',
        'ig-inkwell',
        'ig-hudson',
        'ig-hefe',
        'ig-earlybird',
        'ig-brannan',
        'ig-amaro',
        'ig-1977'
    ];

    chosenFilter = this.filters[Math.floor(Math.random() * this.filters.length)];
    userLogin = { email: '', password: '' };

    constructor(private readonly _router: Router,
                private readonly _authService: AuthService) {
    }

    ngOnInit() {
    }

    login(): void {
        // Store the token
        this._authService.setToken('you_are_golden');
        // Redirect to home
        this._router.navigate(['']);

        // If we really wanted to log in...
        // this.authService.login(email, password)
        //   .subscribe(result => {
        //     // Store the token
        //     this.authService.setToken(result['access_token']);
        //     // Redirect to home
        //     this.router.navigate(['']);
        //   });
    }
}
