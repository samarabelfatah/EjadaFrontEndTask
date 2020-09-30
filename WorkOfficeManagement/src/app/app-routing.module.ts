import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './interceptor/authentication.guard';


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'department', component: DepartmentComponent , canActivate:[AuthenticationGuard] },
  { path: 'employees', component: EmployeeListComponent , canActivate:[AuthenticationGuard] },  
  { path: 'addemployee', component: EmployeeComponent , canActivate:[AuthenticationGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
