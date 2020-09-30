import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
 // styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isUserLoggedin:boolean=false;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.isUserLoggedin= localStorage.getItem('token') === null ? false : true;
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this.route.navigateByUrl("");
  }
 
}
