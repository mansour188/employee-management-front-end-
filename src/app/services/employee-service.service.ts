import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee/employee.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { employeeRegister } from '../model/employee/employeeRegister.model';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private Url = 'http://localhost:8080/api'; 
   
  

  constructor(private http:HttpClient, private router: Router,private toastr:ToastrService) { 

  
  
  }

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

  registerEmpngloyee(file: File, employer: employeeRegister) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('employee',new Blob([JSON.stringify(employer)], { type: 'application/json' }));
    const token = localStorage.getItem('token');
    console.log(token)

    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    
    
  
    this.http.post(`${this.Url}/register_employee`, formData,{headers,responseType: 'text' }).subscribe(
      () => {
        this.toastr.success('Request processed successfully', 'Toastr fun!');
        console.log('Request processed successfully');
      
        
      },
      (error) => {

        if (error.status==409){
         
          this.toastr.error("email exist ! ")


        }
        this.toastr.error("register failed ! ")
        
        console.error('Error:', error);
        
       
             
      }
    );
  }


  deleteEmployee=(id:number)=>{
    
    const url = `${this.Url}/deleteEmployee/${id}`
    console.log(url)
    const token = localStorage.getItem('token');
    console.log(token)

    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(url,{headers})
  }
}
