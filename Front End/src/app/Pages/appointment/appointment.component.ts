import { Component } from '@angular/core';
import { AppointmentService } from '../../Service/appointment.service';
import { Appointment } from '../../Class/appointment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
    
    appointments:Appointment[]=[]
    constructor(private appointmentService:AppointmentService){

    }

    ngOnInit(): void{
      this.getAppointments();
    }

    getAppointments(){
      this.appointmentService.getAllAppointments().subscribe(data=>{
         this.appointments = data;
      })
    }

    delete(id: number){
      this.appointmentService.delete(id).subscribe(data=>{
          this.getAppointments();
      })
      

    
    }
}
