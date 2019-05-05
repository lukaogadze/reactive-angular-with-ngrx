import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    readonly model: string = 'auth/login';
    readonly isAuthenticated$ = new BehaviorSubject(false);

    constructor(private http: HttpClient) {
        this.setToken(AuthService.getToken()!);
    }

    getUrl() {
        return `${environment.apiEndpoint}${this.model}`;
    }

    login(email: string, password: string) {
        return this.http.post(this.getUrl(), { email, password });
    }

    logout() {
        this.setToken('');
    }

    // TOKEN
    setToken(token: string) {
        localStorage.setItem('token', token);
        this.isAuthenticated$.next(token !== ''); // Could be more Robust
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
