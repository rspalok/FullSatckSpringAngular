import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuthenticationServiceService : HardCodedAuthenticationServiceService) { }

  ngOnInit(): void {
    //let user=sessionStorage.getItem('authentedUser')
   // return !(user === null);
   console.log('removing session data ')
    this.hardCodedAuthenticationServiceService.logout(); 
  }

}
