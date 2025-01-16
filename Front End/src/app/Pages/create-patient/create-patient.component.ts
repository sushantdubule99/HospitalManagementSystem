import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../Class/patient';
import { MasterService } from '../../Service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patient:Patient=new Patient();
 
  constructor(private masterservice:MasterService , private router:Router){

  }

  savePatient(){
    this.masterservice.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    })
  }

  onSubmit(){
     this.savePatient();
  }
  
  goToPatientList(){
    this.router.navigate(['/admin'])
  }

}
