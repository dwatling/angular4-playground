import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Todo[] = [];
  done: any;

  constructor(private todo: TodoService) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.todo.getList().subscribe((list: Todo[]) => {
      this.data = list;
    });
  }

  onEnter(newDescription: string): void {
    console.log('New Description: ', newDescription);
    const newTodo: Todo = new Todo();
    newTodo.description = newDescription;

    // TODO - Clear newDescription field

    this.todo.create(newTodo).subscribe(() => {
      this.refreshList();
    });
  }

  clickDelete(todo: Todo): void {
  }

  clickUpdate(todo: Todo): void {
  }
}
