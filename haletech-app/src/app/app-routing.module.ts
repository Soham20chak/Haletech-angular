import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'doctors',component: DoctorsComponent},
  //{path: '' , redirectTo: 'doctors', pathMatch:'full' } 
  {path: 'create-doctors',component: CreateDoctorComponent},
  {path: 'update-doctor/:id',component: UpdateDoctorComponent},
  {path: 'doctor-details/:id',component: DoctorDetailsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
