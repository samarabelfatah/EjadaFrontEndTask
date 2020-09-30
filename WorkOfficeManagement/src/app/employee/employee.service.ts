import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  create(data:Employee)
  {
    return this.http.post('Employee/CreateEmployee', data);
  }
  getAllEmployee(data:any)
  {
    return this.http.post('Employee/GetAllEmployees' , data);
  }

}
