import { Component, inject, OnInit } from '@angular/core';
import { PatientService } from '../../core/services/patient.service';
import { ApiResponeModel, Patient } from '../../core/classes/Hospital.mode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  imports: [FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit  {

  ngOnInit(): void {
    this.getAllPatients() ;
  }
  
  newPatient : Patient = new Patient();
  patientList : Patient [] = [] ;
  patientSrv = inject(PatientService) ;

  constructor() {
    const loggedData = localStorage.getItem('practoLogin') ;
    if(loggedData != null ) {
      this.newPatient.hospitalId = JSON.parse(loggedData).hospitalId;
     }
    }

  addPatient() {
        this.patientSrv.newPatient(this.newPatient).subscribe((res:ApiResponeModel)=> {
          if(res.result){
            alert("hohoho nigga")
            this.getAllPatients() ;
          } else {
            alert(res.message)
          }
        })
  }

  getAllPatients() {
    this.patientSrv.getPatientById(this.newPatient.hospitalId).subscribe((res:ApiResponeModel)=> {
       this.patientList = res.data ;
    })
   }


}
