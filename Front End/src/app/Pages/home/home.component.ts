import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  loginObj: any = {
    username: '',
    password:'',

   }

   constructor(private roter:Router){}

   onLogin() {
     debugger;
     if(this.loginObj.username === 'doctor' && this.loginObj.password === '1234') {
      localStorage.setItem('loggedinUser',this.loginObj.username);
      this.roter.navigateByUrl('admin');
     } else {
      alert('Username or Password is incorrect')
     }
   }



}
