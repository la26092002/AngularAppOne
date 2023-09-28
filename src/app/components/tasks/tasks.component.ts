import { Component } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){}

  ngOnInit():void {
    //this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)//subscribe is like .then

  }

  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      ()=> (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    )
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    //console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    console.log(task)
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
