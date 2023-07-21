import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login';

@Injectable({ providedIn: 'root' })
export class LoginService {
    baseUrl = 'http://localhost:3000/users'
    constructor(private http: HttpClient) { }
    // getUsers(): Observable<User[]> {
    //     return this.http.get<User[]>(this.baseUrl);
    // }
    addUsers(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl, user);
    }

}