
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponeModel, Appointment } from '../classes/Hospital.mode';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  constructor(private http : HttpClient) { }

  newAppointment(obj: Appointment) : Observable<ApiResponeModel>{
    return this.http.post<ApiResponeModel>(environment.api_url + Constant.API_END_POINT.ADD_NEW_APPOINTMENT,obj)
  }

  getAppointmentByHospital(id:number) : Observable<ApiResponeModel>{
    return this.http.get<ApiResponeModel>(environment.api_url + Constant.API_END_POINT.GET_APPOINTMENTS_BY_HOSPITAL+id)
   
  }

}
