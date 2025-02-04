import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponeModel, Patient} from '../classes/Hospital.mode';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

   constructor(private http : HttpClient) { }
  
    newPatient(obj: Patient) : Observable<ApiResponeModel>{
      return this.http.post<ApiResponeModel>(environment.api_url + Constant.API_END_POINT.ADD_NEW_PATIENT,obj)
    }

    getPatientById(id:number) : Observable<ApiResponeModel>{
      return this.http.get<ApiResponeModel>(environment.api_url + Constant.API_END_POINT.GET_PATIENT_BY_HOSPITAL+id)
     
    }

    
}
