import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medicine } from '../../Class/medicine';
import { MedicineService } from '../../Service/medicine.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-medicine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
  
  medicine:Medicine=new Medicine();

  constructor(private medicineService:MedicineService , private router:Router){}

 
  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.goToViewMedicine();
    })
  }
 

  onSubmit(){
     this.saveMedicine();
  }

  goToViewMedicine(){
    this.router.navigate(['/view-medicine'])
  }

}
