import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm;
  constructor(private _authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  register() {
    this._authService.register(this.registerForm.value).subscribe(data => {
      //console.log("data", data);
      if (data["isSuccess"] == true) {
        this.route.navigateByUrl("");
      } else {
        data["errors"].forEach(element => {
          alert(element);
        });
      }
    })
  }
  cancel() {
    this.registerForm.reset();
  }

}
