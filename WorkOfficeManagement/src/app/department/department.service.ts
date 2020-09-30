import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
   
  create(data)
  {
    return this.http.post('Department/CreateDepartment', data);
  }
  getDepartmentDDL()
  {
    return this.http.get('Department/GetDepartmentsList');
  }
}
