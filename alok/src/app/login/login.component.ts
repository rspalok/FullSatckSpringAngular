import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Alok";
  password = "";
  messege="";
  name=''
  //routing to login //get router //Dependency Injection
  constructor(private router :Router, //find the router ind inject 
   private hardCodedAuthenticationServiceService: HardCodedAuthenticationServiceService// i have injected class of hadrcoded..
   
   ) {


  }

  ngOnInit(): void {
  }
  loginHere(){
    console.log(this.username);
    if(this.hardCodedAuthenticationServiceService.authenticate(this.username,this.password)
      //this.username==="Alok" && this.password==="Alok"
      ){
      
      //this.router.navigate(['java'])
      this.router.navigate(['java',this.username]);
      this.messege="Susses";
    }else{
      this.messege="failed";
    }
   // console.log(this.password);
  }

}
