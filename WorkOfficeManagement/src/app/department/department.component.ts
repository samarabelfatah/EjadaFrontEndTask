import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { convertCompilerOptionsFromJson } from 'typescript';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html'
 
})
export class DepartmentComponent implements OnInit {
@ViewChild('createDepForm') createDepForm;
  model:any={};
  constructor(private _departmentService :DepartmentService,
    private route:Router) { }

  ngOnInit(): void {
    
  }
  create(){
   
    this._departmentService.create(this.model).subscribe(data=>{
      if (data["isSuccess"] == true) {
        console.log("depatement added" , data);
        this.createDepForm.reset();
      } else {
        data["errors"].forEach(element => {
          alert(element);
        });
      }

      
    });
  }
  cancel(){
    this.createDepForm.reset();
  }

}
