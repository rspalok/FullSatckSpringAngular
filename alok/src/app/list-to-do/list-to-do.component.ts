import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{

  constructor(
   /* public id: number, 
    public description:string,
    public done:boolean , 
    public targetdate:Date
    ,*/
    public  m_Id:number,
    public  m_stName:string,
    public  m_stWork:string,
    public  m_dtEndDate:Date ,
    public  m_IIsValid:number ,
    ){
    
  }
  
}

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit { 
  todos : Todo[] | undefined;
  public messege:string ="";
  
 
  constructor(private todoService:TodoDataService) {
      }

  ngOnInit(): void {
    this.getdtod();
  }
  getdtod(){
    this.todoService.getAllTodoList('1').subscribe(
      response=> {
        console.log(response)

        this.todos=response
      }
    )
  }
  
  deleteTodo(id:any){
    console.log('deletetodo  '+id);
    this.todoService.deleteTodoById("0",id).subscribe(
      responce=>{
        console.log(responce); 
        this.getdtod(); 
        this.messege=`deleted succesfull of id ${id}`
      }
    );
  }
  updateTodo(id:any){
    console.log('deletetodo  '+id);
    this.todoService.updateTodoById("0",id).subscribe(
      responce=>{
        console.log(responce); 
        this.getdtod(); 
        this.messege=`deleted succesfull of id ${id}`
      }
    );
  }


}
