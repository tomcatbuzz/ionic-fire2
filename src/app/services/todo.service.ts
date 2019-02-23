import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Todo {
  id?: string;
  task: string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Observable<Todo[]>;
  private todoCollection: AngularFirestoreCollection<Todo>;

  constructor(private afs: AngularFirestore) {
    this.todoCollection = this.afs.collection<Todo>('todos');
    this.todos = this.todoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getTodos() {
     return this.todos;
   }

   getTodo(id: string) {
     return this.todoCollection.doc<Todo>(id).valueChanges().pipe(
       take(1),
       map(todo => {
         todo.id = id;
         return todo;
       })
     );
   }

   addTodo(todo: Todo) {
     return this.todoCollection.add(todo);
   }

   updateTodo(todo: Todo, id: string) {
     return this.todoCollection.doc(id).update(todo);
   }

   removeTodo(id: string) {
    return this.todoCollection.doc(id).delete();
   }
}
