import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  taskId : any;
  task :any;

  constructor( private route : ActivatedRoute , private tasksService: TasksService ,private router:Router){ }

  ngOnInit(): void {
    this.taskId= this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskId];
  }
  updateTask(){
    this.tasksService.updateTask(this.taskId,this.task);
    this.router.navigate(['/']);
  }

}
