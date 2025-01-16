import { Component } from '@angular/core';
import { MedicineService } from '../../Service/medicine.service';
import { Medicine } from '../../Class/medicine';

import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {

  medicines:Medicine[]=[];

  constructor(private medicineService:MedicineService, private router:Router ){

  }
  
  ngOnInit():void{
    this.getMedicine();
  }

  getMedicine(){
    this.medicineService.getMedicines().subscribe(data=>{
     this.medicines=data;
    })
  }

  update(id:number){
   
    this.router.navigate(['update-medicine',id])
  }
  

  delete(id:number){
    this.medicineService.delete(id).subscribe(data=>{
      console.log(data);
   
      this.getMedicine();
    })
  }
}
