import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { JavaService } from '../service/data/java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  name='';
  welcome_message='';
  constructor(private route:ActivatedRoute,
    private service:JavaService //service which we created
    ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name'];
  }
  getApiData(){
    console.log(" calling service "+this.service.getCallToApi());
    this.service.getCallToApi().subscribe(
      //response => console.log(response.m_stName),
      response => this.handalSuccessfullResponce(response),
      error => this.handalSuccessfullResponce(error)
      );
    //console.log("last line of welcome message");;
    //console.log("api will call from javacomponent");;
  }
  getCallHomeCntWithPram(){
    
  }
  handalSuccessfullResponce(responce:any){

    console.log("handalSuccessfullResponce(responce:any)"+responce);
    console.log("handalSuccessfullResponce(responce:any)"+responce.m_stName);
    console.log("handalSuccessfullResponce(responce:any)"+responce.m_stAge);
    console.log("handalSuccessfullResponce(responce:any)"+responce.m_stAddress);
    console.log("handalSuccessfullResponce(responce:any)"+responce.m_stMessage);
    this.welcome_message='Hey '+responce.m_stName+' of age '+responce.m_stAge+' from '
     +responce.m_stAddress +' saying '+ responce.m_stMessage 
    }
    handalErrorResponce(error :any){

      console.log(error);
      console.log(error.error); 
      console.log(error.error.message);
      this.welcome_message=error.error.message;
      
      //return null;
    }

}
