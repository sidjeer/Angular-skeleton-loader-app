import { Component, OnInit } from '@angular/core';
import { GetuserrsService } from '../app/getuserrs.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'skeleton-loader-app';
  users=[];
  constructor(private getuserrsSe:GetuserrsService){}

  ngOnInit(){
    // this.getuserrsSe.getUsers();
     this.getuserrsSe.getUsers().subscribe(result => {
      this.users = result;
    });
    // this.users = this.getuserrsSe.totalusers;
    console.log( 1212122)    
    console.log( this.users)

  }

 // j = {"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""}
}
