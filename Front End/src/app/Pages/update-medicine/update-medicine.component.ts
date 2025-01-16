import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medicine } from '../../Class/medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../../Service/medicine.service';

@Component({
  selector: 'app-update-medicine',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  
  medicine:Medicine=new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router){}

   ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
   }
  onSubmit(){
      this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
        console.log(data);
        alert(this.medicine.drugName+"  "+'Updated Successfully');
        this.gotoMedicineList();

      })
  }

  gotoMedicineList(){
    this.router.navigate(['view-medicine'])
  }


}
