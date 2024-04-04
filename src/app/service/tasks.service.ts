import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
   tasks: Task[] = []
   
  constructor() { 
    //localStorage.clear();
    let storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
    this.tasks= JSON.parse(storedTasks);
    }else{
      this.tasks=[];
    }
  }
  deleteTask(i: number){

    this.tasks.splice(i,1); //to delete one element from arr
    this.storeTasks();
  }
  saveTask(name: any, description: any, date: any) {
    const newTask: Task = { name, description, date, status: false };
    this.tasks.push(newTask);
    this.storeTasks();
  }
  
  updateTask(id: any,task : any){
       this.tasks[id] = task;
       this.storeTasks();
  }
  // store tasks in the local storage
  storeTasks(){
   localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  saveStatus(i: number, status : any){

    console.log(this.tasks);

    this.tasks[i].status = status;
    this.storeTasks();
  }
}
