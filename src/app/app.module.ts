import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { MatDateSelectionModel, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { TasksComponent } from './tasks/tasks.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { AuthService } from './services/auth.service';
export function initializeAuthService(authService: AuthService) {
  return () => authService.initAuthState();
}


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
    ProfileEmployeeComponent,
    ModalComponent,
    TasksComponent,
    LeaveManagementComponent,
    AdminProfileComponent  ],
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
    MatNativeDateModule,
    NgbModule,
    FullCalendarModule, 
    MatSidenavModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
   
  
                 
   
    
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuthService,
      deps: [AuthService],
      multi: true
    }
    
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

