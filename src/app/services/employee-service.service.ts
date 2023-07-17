import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee/employee.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private Url = 'http://localhost:8080/api'; 

  constructor(private http:HttpClient, private router: Router) { }

  getAllEmployee=()=>{
    const token = localStorage.getItem('token');
    console.log("token   "+token)
    console.log(`${this.Url}/allEmployees`)

    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<EmployeeModel[]>(`${this.Url}/allEmployees`,{headers})

    }
    this.router.navigate(['/login']); // Redirect to the login page
    return  new Observable<EmployeeModel[]>();

    

    
  }
}
