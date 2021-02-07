
import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationServiceService } from 'src/app/service/hard-coded-authentication-service.service';
//import { HardCodedAuthenticationServiceService } from 'src/app/service/hard-coded-authentication-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLogin : boolean=false;
  name :any="";
  constructor(public hardCodedAuthenticationServiceService: HardCodedAuthenticationServiceService
    )
  { }

  ngOnInit(): void {
    //console.log("this.hardCodedAuthenticationServiceService.isUserLogedIn())  "+this.hardCodedAuthenticationServiceService.isUserLogedIn());
    this.isUserLogin=this.hardCodedAuthenticationServiceService.isUserLogedIn();  
    this.name=this.hardCodedAuthenticationServiceService.getUserLogedName();
  } 
}
