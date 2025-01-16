import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../Class/appointment';
import { AppointmentService } from '../../Service/appointment.service';
import { Router } from '@angular/router';
import { Constant } from '../../constant';




@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
 
   appointment:Appointment=new Appointment();

    validationMessage: any = Constant.VALIDATION_MESSAGE;

   constructor(private appointmentService:AppointmentService, private router :Router){
   
   }

   saveAppointment(){
    debugger;
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointment();
    })
   }
    


  onSubmit(){
    debugger;
     this.saveAppointment();

  }

   goToAppointment(){
    debugger;
    this.router.navigate(['/appointmentlist'])
   }
}
