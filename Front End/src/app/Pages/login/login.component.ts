import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginObj: any = {
    username: '',
    password:'',

   }

   constructor(private router:Router){}

   onLogin() {
     debugger;
     if(this.loginObj.username === 'doctor' && this.loginObj.password === '1234') {
      localStorage.setItem('loggedinUser',this.loginObj.username);
      this.router.navigateByUrl('admin');
     } else {
      alert('Username or Password is incorrect')
     }
   }

   
}



