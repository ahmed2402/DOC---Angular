import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiResponeModel, Hospital, User } from './core/classes/Hospital.mode';
import { FormsModule } from '@angular/forms';
import { HospitalService } from './core/services/hospital.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PRACTO';

  private hospitalService = inject(HospitalService)

  constructor() {
    const loggedData = localStorage.getItem('practoLogin') ;
    if(loggedData != null ) {
      this.loggedHospitalData = JSON.parse(loggedData) ;
    }
  }

  userObj : User = new User() ;
  loggedHospitalData : Hospital = new Hospital() ;

  showLogin() {
    const modal = document.getElementById('loginModal');
    if(modal != null) {
      modal.style.display = 'block'
    }
  }

  closeLogin() {
    const modal = document.getElementById('loginModal');
    if(modal != null) {
      modal.style.display = 'none'
    }
  }

  onLogin() {
    this.hospitalService.login(this.userObj).subscribe((res:ApiResponeModel) => {
      if(res.result){
        this.loggedHospitalData = res.data ;
        localStorage.setItem('practoLogin' , JSON.stringify(res.data))
        this.closeLogin() ;
      } else {
        alert(res.message)
      }
    })
  }

  LogOut() {
    localStorage.removeItem('practoLogin') ;
    this.loggedHospitalData = new Hospital() ;
  }

}
