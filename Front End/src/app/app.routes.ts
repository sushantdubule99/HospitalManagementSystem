import { Routes } from '@angular/router';
import { AdmindashComponent } from './Pages/admindash/admindash.component';
import { AppointmentComponent } from './Pages/appointment/appointment.component';
import { LoginComponent } from './Pages/login/login.component';
import { CreateAppointmentComponent } from './Pages/create-appointment/create-appointment.component';
import { HomeComponent } from './Pages/home/home.component';

import { CreatePatientComponent } from './Pages/create-patient/create-patient.component';
import { MedicinelistComponent } from './Pages/medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './Pages/create-medicine/create-medicine.component';
import { UpdateMedicineComponent } from './Pages/update-medicine/update-medicine.component';

export const routes: Routes = [
   {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
   },
   {
     path:'home',
     component:HomeComponent
   },
   {
      path:'login',
      component:LoginComponent
   },
   {
      path:'admin',
      component:AdmindashComponent,
     
   },
   {
      path:'appointmentlist',
      component:AppointmentComponent
   },
   {
      path:'create-appointment',
      component:CreateAppointmentComponent
   },
   
   {
      path:'create-patient',
      component:CreatePatientComponent
   },
   {
      path:'view-medicine',
      component:MedicinelistComponent
   },
   {
      path:'create-medicine',
      component:CreateMedicineComponent
   },
   {
      path:'update-medicine/:id',
      component:UpdateMedicineComponent
   }
];
