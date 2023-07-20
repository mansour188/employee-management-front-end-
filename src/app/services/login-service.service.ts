import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  
  private loginUrl = 'http://localhost:8080/auth/login'; 
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(this.loginUrl, body);
  }

  getToken=()=>{const token = localStorage.getItem('token');
  console.log("token   "+token)
  
  

  if (token) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers

  }
  return new HttpHeaders();
    

  }
}
