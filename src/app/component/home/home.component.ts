import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor( public  tasksService : TasksService, private title : Title) {
  this,title.setTitle('Home');
}

ngOnInit(): void {
  
}
deleteTask(i: number){
  this.tasksService.deleteTask(i);
}
saveStatus(i: number, status : any){
  this.tasksService.saveStatus(i,status);
}
}
