import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(
    private http:HttpClient
    

  ) { }

  getCallToApi(){
    return this.http.get<HomeCNT_User>('http://localhost:8080/bean');
   // console.log('api Colling from JavaService');
  }
   
  //http://localhost:8080/bean/shyam
}
export class HomeCNT_User{
  constructor(
    public  m_stName:string,
    public  m_stAge:string,
    public  m_stAddress:string,
    public  m_stMessage:string 
  ){

  }
}

