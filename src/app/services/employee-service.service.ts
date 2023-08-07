import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/Employee.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { employeeRegister } from '../model/EmployeeRegister.model';
import { GlobalConfig, ToastrService } from 'ngx-toastr';


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
      return this.http.get<EmployeeModel[]>(`${this.Url}/allEmployees`)

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
        this.toastr.success('Request processed successfully');
        console.log('Request processed successfully');
        this.router.navigate(["employees"])
      
        
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


  UpdateEmpngloyee(file: File, employer: employeeRegister,id:number) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(employer)
    formData.append('employee',new Blob([JSON.stringify(employer)], { type: 'application/json' }));
    const token = localStorage.getItem('token');
    console.log(token)

    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    
    
  
    this.http.put(`${this.Url}/updateEmployee/${id}`, formData,{headers,responseType: 'text' }).subscribe(
      () => {
        this.toastr.success('Request processed successfully');
        console.log('Request processed successfully');
        this.router.navigate(["employees"])
      
        
      },
      (error) => {

        if (error.status==409){
         
          this.toastr.error("user not exist ! ")


        }
        this.toastr.error("register failed ! ")
        
        console.error('Error:', error);
        
       
             
      }
    );
  }

  getEmployeeById=()=>{
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<EmployeeModel>(`${this.Url}/getEmployee/${userId}`,{headers})
  
    
  }
}
