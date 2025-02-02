import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/Constant';
import { ApiResponeModel, Hospital, User } from '../classes/Hospital.mode';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http : HttpClient) { }

   registerHospital(obj : Hospital) : Observable<ApiResponeModel>{
      return this.http.post<ApiResponeModel>(environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL,obj)
   }

   login(obj : User) : Observable<ApiResponeModel>{
    return this.http.post<ApiResponeModel>(environment.api_url + Constant.API_END_POINT.ADD_LOGIN,obj)
 }

}
