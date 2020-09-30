import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  public page = 1;
  public pageSize = 20;
  employeeList: Employee[] = [];
  @ViewChild('searchvalue') searchvalue;
  constructor(private _employeeService: EmployeeService,
    private route: Router
  ) { }

  ngOnInit(): void {
   
      var data = {
        "pageNumber": this.page,
        "pageSize": this.pageSize,
        "searchText": "",
        "fieldName": "",
        "orderingProperty": 0
      }
      this._employeeService.getAllEmployee(data).subscribe(res => {
        var data = res["data"]
        this.employeeList = data["employeePagedList"];
      });

    
  }
  addEmployee() {
    this.route.navigateByUrl("/addemployee");
  }
  searchDepartment() {
    ;
    var data = {
      "pageNumber": this.page,
      "pageSize": this.pageSize,
      "searchText": this.searchvalue.value,
      "fieldName": "",
      "orderingProperty": 0
    }
    console.log("this.searchvalue.value", this.searchvalue.value);
    this._employeeService.getAllEmployee(data).subscribe(res => {
      var data = res["data"]
      this.employeeList = data["employeePagedList"];
      console.log("employeeList", this.employeeList);
    });
  }

}
