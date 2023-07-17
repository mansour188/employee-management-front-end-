import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrls: ['./sgin-in.component.scss']
})
export class SginInComponent {

  email!: string;
  password!: string;

  constructor(private loginService: LoginServiceService) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        const token = response.token;
        console.log(token)

        
        localStorage.setItem('token', token);
        

      },
      error => {
        // Handle login error
        console.log(error);
      }
    );
  }

}
