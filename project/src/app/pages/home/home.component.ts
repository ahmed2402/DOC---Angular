import { Component } from '@angular/core';
import { NewHospitalComponent } from "../new-hospital/new-hospital.component";

@Component({
  selector: 'app-home',
  imports: [NewHospitalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
