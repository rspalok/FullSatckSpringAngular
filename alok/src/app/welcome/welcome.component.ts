import { Component, OnInit } from '@angular/core';
//import { welcomeSpringBoot } from './app.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'alok';
  messege : string="my log i am alok Sharma"
  constructor() { }

  ngOnInit(): void {
    //this.messege=5;
    this.messege='Alok Sharma';
  }

}
export class Welcome{

}
export class java{

}
