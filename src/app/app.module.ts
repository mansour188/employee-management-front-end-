import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { EmployerMangementComponent } from './employers/employer-mangement.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { SginInComponent } from './sgin-in/sgin-in.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LeaveComponent } from './leave/leave.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SginInComponent,
    EmployerMangementComponent,
    RegisterEmployeeComponent,
    LeaveComponent,
    UpdateEmployerComponent,
    ProfileEmployeeComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
   
   
    
    
    
  ],
  providers: [
    // 
    // required animations providers
    // Toastr providers
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
function provideAnimations(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function provideToastr(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

