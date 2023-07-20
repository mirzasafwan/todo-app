import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/tasks'
  }
  add(task: Task): Observable<Task> {
    return this.http.post<Task>(this.serviceURL, task)
  }
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL)
  }
  delete(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.serviceURL + '/' + task.id)
  }
  edit(task: Task): Observable<Task> {
    return this.http.put<Task>(this.serviceURL + '/' + task.id, task)
  }
};



