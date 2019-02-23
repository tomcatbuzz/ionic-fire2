import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, Todo } from '../../services/todo.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  todo: Todo = {
    task: '',
    createdAt: new Date().getTime(),
    priority: 1
  };

  id = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private toastCtrl: ToastController,
    private router: Router,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.id) {
      this.todoService.getTodo(this.id).subscribe(todo => {
        this.todo = todo;
      });
    }
  }

  addTodo() {
    this.todoService.addTodo(this.todo).then(() => {
      this.router.navigateByUrl('todo-list');
      this.showToast('Todo Added');
    }, err => {
      this.showToast('There was a problem adding your Todo');
    });
  }

  updateTodo() {
    this.todoService.addTodo(this.todo).then(() => {
      this.router.navigateByUrl('todo-list');
      this.showToast('Todo Updated');
    }, err => {
      this.showToast('There was a problem updating your Todo');
    });
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo.id).then(() => {
      this.router.navigateByUrl('todo-list');
      this.showToast('Todo Deleted');
    }, err => {
      this.showToast('There was a problem deleting your Todo');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
     message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
