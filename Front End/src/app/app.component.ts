import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdmindashComponent } from "./Pages/admindash/admindash.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdmindashComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOSPITAL_MANAGEMENT_ANGULAR18';
}
