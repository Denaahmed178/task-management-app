import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  constructor(private tasksService: TasksService, private router: Router) {

  }
  ngOnInit(): void {

  }

  saveTask(form: NgForm): void {
    const taskName = form.controls['task'].value;
    const description = form.controls['description'].value;
    const date = form.controls['date'].value;

    this.tasksService.saveTask(taskName, description, date);
    this.router.navigate(['/']);
  }

}
