import { Injectable } from '@angular/core';

@Injectable({//it make it service 
  providedIn: 'root'
})
export class HardCodedAuthenticationServiceService {

  constructor() { }
  authenticate(username:any,password:any){
    console.log(username+' password '+password+" before "+this.isUserLogedIn())
    if(username==="Alok" && password==="1234"){
      sessionStorage.setItem('authentedUser',username)
      console.log("after "+this.isUserLogedIn());
      return true
    }
    return false
  }
  isUserLogedIn(){
    let user =sessionStorage.getItem('authentedUser')
    console.log("after user "+user)
    return !(user === null)
  }
  getUserLogedName(){
    let user =sessionStorage.getItem('authentedUser')
    console.log("after user "+user)
    return user;
  }
  logout(){
    sessionStorage.removeItem('authentedUser')
  }
}
