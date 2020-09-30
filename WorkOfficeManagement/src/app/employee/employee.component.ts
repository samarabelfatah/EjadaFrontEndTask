import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department/departement.model';
import { DepartmentService } from '../department/department.service';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  departmentList: Department[] = [];
  @ViewChild("createEmployeeForm") createEmployeeForm;
  constructor(private _employeeService: EmployeeService,
    private _departmentService: DepartmentService,
    private route: Router) { }

  ngOnInit(): void {
   
      this._departmentService.getDepartmentDDL().subscribe(res => {
        console.log("getdepartmentDDL", res);
        this.departmentList = res['data'];
      });
  }
  create() {
    debugger;
    this.createEmployeeForm.value["isactive"]= this.createEmployeeForm.value["isactive"]===""||this.createEmployeeForm.value["isactive"]===false?false:true;
    this.createEmployeeForm.value["ismanager"]= this.createEmployeeForm.value["ismanager"]===""||this.createEmployeeForm.value["ismanager"]===false?false:true;
    console.log("this.createEmployeeForm.value", this.createEmployeeForm.value);

    this._employeeService.create(this.createEmployeeForm.value).subscribe(data => {
      console.log("Employee Added", data);
      this.route.navigateByUrl("/employees");
    });
  }
  cancel() {
    this.createEmployeeForm.reset();
  }

}
