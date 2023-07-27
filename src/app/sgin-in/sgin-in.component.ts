import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrls: ['./sgin-in.component.scss']
})
export class SginInComponent {

  email!: string;
  password!: string;

  constructor(private loginService: LoginServiceService,private toastr: ToastrService) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        const token = response.token;
        const userId=response.idUser

        console.log(response)
      

       
        this.toastr.success("login successful!")

        
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId.toString());
        this.toastr.success("login successful!")
        

      },
      error => {
        if (error.status === 401) {
          this.toastr.error('Invalid credentials. Please check your email and password.');
        } else if (error.status === 409) {
          this.toastr.error('Account already exists.');
        } else {
          this.toastr.error('An unknown error occurred. Please try again later.');
        }
      
    
      }
    );
  }

}
