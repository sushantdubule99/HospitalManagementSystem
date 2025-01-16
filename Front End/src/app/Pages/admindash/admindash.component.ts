import { Component } from '@angular/core';
import { MasterService } from '../../Service/master.service';
import { Patient } from '../../Class/patient';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients: Patient[] = [];
    constructor(private masterService: MasterService){

    }

    ngOnInit(): void{
      this.getPatients();
    }

    getPatients(){
      this.masterService.getPatientList().subscribe(data=>{
      this.patients=data;
      })
    }

    delete(id:number){
     
      

      this.masterService.delete(id).subscribe(data=>{
        console.log(data);
       
        this.getPatients();
      })
    }
}
