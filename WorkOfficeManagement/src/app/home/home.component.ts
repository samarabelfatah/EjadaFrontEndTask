import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  model:any={};
  constructor(private _authService:AuthService , private route:Router ) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.model);
    this._authService.login(this.model).subscribe((res) => { 
      console.log("login result data" , res);
      if (res["isSuccess"]==true) {
        var data = res["data"];
        localStorage.setItem('token' , data["token"]); 
        localStorage.setItem("refreshToken", data["refreshToken"] );      
        this.route.navigateByUrl("department");
      } else {
        res["errors"].forEach(element => {
          alert(element);
        });
      }     
      

    });
  }

}
