import { Component, inject, OnInit } from '@angular/core';
import { ApiResponeModel, Appointment } from '../../core/classes/Hospital.mode';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../core/services/appointment.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  
ngOnInit(): void {
  this.getAllAppointments() ;
}

   appointmentList : Appointment [] = [] ;
   newAppointment : Appointment = new Appointment() ;

   private appSrv = inject(AppointmentService) ;

   constructor() {
    const loggedData = localStorage.getItem('practoLogin') ;
    if(loggedData != null ) {
      this.newAppointment.hospitalId = JSON.parse(loggedData).hospitalId;
     }
  
  }
   

  bookAppointment() {
    this.appSrv.newAppointment(this.newAppointment).subscribe((res:ApiResponeModel)=> {
      if(res.result){
        alert("hohoho nigga")
        this.getAllAppointments() ;
      } else {
        alert(res.message)
      }
    })
   }


   getAllAppointments() {
    console.log(this.newAppointment.hospitalId);
    
    this.appSrv.getAppointmentByHospital(this.newAppointment.hospitalId).subscribe((res:ApiResponeModel)=> {
       this.appointmentList = res.data ;
    })
   }
  }
