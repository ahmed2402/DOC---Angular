import { Component, OnDestroy} from '@angular/core';
import { ApiResponeModel, Hospital } from '../../core/classes/Hospital.mode';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../core/services/hospital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  imports: [FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {
  public hospitalObj : Hospital = new Hospital() ;
  private isShow : boolean = false ;

  private subscriptions : Subscription [] = [] ;

  constructor(private hospitalSrv: HospitalService){

  }

  onRegister() {
    this.subscriptions.push(
      this.hospitalSrv.registerHospital(this.hospitalObj).subscribe((res:ApiResponeModel)=> {
       if(res.result){
        alert("Hospital Registration Succesful")
       } else {
        alert(res.message)
       }
    },error => {
      alert(JSON.stringify(error))
    })
  )
  }
}
