import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) {

    }
    onLogin(login: Login): Observable<any> {
        return this.http.post('http://localhost:8088/authtentication/login', login, httpOptions);
    }

    getArticles(): Observable<any> {
        return this.http.get('http://localhost:8088/article', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')
            })
        });
    }

    signUp(register: Register): Observable<any> {
        const body = JSON.stringify(register);
        const response = this.http.post('http://localhost:8088/user/signUp', register, httpOptions);
        return response;
    }
}
