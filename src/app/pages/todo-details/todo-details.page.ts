import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, Todo } from '../../services/todo.service';
import { ToastController, LoadingController, NavController } from '@ionic/angular';

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

  todoId = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private toastCtrl: ToastController,
    private router: Router,
    private loadingController: LoadingController,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
      if (this.todoId) {
        this.loadTodo();
      }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo...'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }


  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving Todo...'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('todo-list');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateBack('todo-list');
      });
    }
  }

  // showToast(msg) {
  //   this.toastCtrl.create({
  //    message: msg,
  //     duration: 2000
  //   }).then(toast => toast.present());
  // }

}
