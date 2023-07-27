import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work } from '../model/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private Url = 'http://localhost:8080/work'; 

  constructor(private http: HttpClient) { 
   
   
  }
  saveWork=(work:Work)=>{
    const token = localStorage.getItem('token');
    console.log(token)

    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const userId = localStorage.getItem('userId');

    return this.http.post(`${this.Url}/post/${userId}`,work,{headers});

    }
}
