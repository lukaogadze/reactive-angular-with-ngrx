import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../libs/core-data/src/lib/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Angular Reactive Workshop';
    isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
    isLoggedIn: boolean | undefined;

    links = [
        { path: '/projects', icon: 'work', label: 'Projects' }
    ];

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.isLoggedIn$
            .subscribe(loggedIn => {
                const path = (loggedIn) ? '' : 'login';
                this.isLoggedIn = loggedIn;
                this.router.navigate([path]);
            });
    }

    logout() {
        this.authService.logout();
    }

    isSidenaveOpen(component: any, authentication: any) {
        return component.opened && authentication;
    }
}
