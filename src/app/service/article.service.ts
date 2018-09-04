import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) { }

    addArticle(title, description): Observable<any> {
        const uri = 'http://localhost:8088/article';
        const obj = {
            name: title,
            description: description
        };
        return this.http.post(uri, obj, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') })
        })
    }


    editArticle(id, title, description): Observable<any>  {
        const uri = `http://localhost:8088/article/` + id;
        const obj = {
            name: title,
            description: description
        };
        return this.http.put(uri, obj, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') })
        })
    }

    deleteAricle(id): Observable<any> {
        const uri = `http://localhost:8088/article/` + id;
        return this.http.delete(uri, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') })
        })
    }


    getOneArticle(id): Observable<any>  {
        const uri = `http://localhost:8088/article/` + id;
        return this.http.get(uri, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') })
        })
    }
}


