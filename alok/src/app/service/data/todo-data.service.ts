import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Todo } from 'src/app/list-to-do/list-to-do.component'; 

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
    
    ) { }
  getAllTodoList(id : any){
    return this.http.get<Todo[]>(`http://localhost:8080/user/listTodo/${id}`)
    // return this.http.get<HomeCNT_User>('http://localhost:8080/bean');
  }
  updateTodoById(userId : any,id : any){
    return this.http.delete<Todo[]>(`http://localhost:8080/user/update/${id}`)
    // return this.http.get<HomeCNT_User>('http://localhost:8080/bean');
  }
  deleteTodoById(userId : any,id : any){
    return this.http.delete<Todo[]>(`http://localhost:8080/user/delete/${id}`)
    // return this.http.get<HomeCNT_User>('http://localhost:8080/bean');
  }
}
/*export class Todos{
  constructor(
   s
  ){

  }
}*/