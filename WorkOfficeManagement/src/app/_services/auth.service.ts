import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post('Account/Login', data);
  }
  register(data)
  {
    return this.http.post('Account/Register', data);
  }
  
}
