import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  HOST = 'http://localhost:8080/todo';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.HOST);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.HOST, todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.HOST + '/' + todo.id, todo);
  }

  remove(todo: Todo): Observable<Object> {
    return this.http.delete(this.HOST + '/' + todo.id);
  }
}
