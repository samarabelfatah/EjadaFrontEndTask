import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import{HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpConfigInterceptor } from './interceptor/HttpConfigInterceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from "@auth0/angular-jwt";


export function tokenGetter() {
  return localStorage.getItem("token");
}
 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent ,  
    HomeComponent, 
    RegisterComponent,
     DepartmentComponent, 
     EmployeeComponent,
      EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ,
    MatDialogModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //allowedDomains: ["https://localhost:44384/"]
      },
    }),
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: HttpConfigInterceptor, 
    multi: true
  } , 
   AuthService,
   DepartmentService     
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
