export class Hospital {
  hospitalId:             number;
  hospitalName:           string;
  hospitalAddress:        string;
  hospitalCity:           string;
  hospitalContactNo:      string;
  hospitalOwnerName:      string;
  hospitalOwnerContactNo: string;
  hospitalEmailId:        string;
  userName:               string;
  password:               string;

  constructor() {
      this.hospitalId = 0 ;
      this.hospitalName = '' ;
      this.hospitalAddress = '' ; 
      this.hospitalCity = '' ;
      this.hospitalContactNo = '' ; 
      this.hospitalOwnerName = '' ;
      this.hospitalOwnerContactNo = '' ;
      this.hospitalEmailId = '' ;
      this.userName = '' ;
      this.password = '' ;
  }
}

export interface ApiResponeModel {
message : string , 
result : boolean ;
data : any ;
}

export class User {
userName: string;
password: string;

constructor() 
{
this.userName = '' ;
this.password = '' ;
}

}

export class Appointment {
name: string ;
mobileNo: string;
city: string;
age: number;
gender: string;
appointmentDate: Date;
appointmentTime: string;
isFirstVisit: boolean;
naration: string;
hospitalId: number;

constructor() {
this.name = '' ;
this.mobileNo = '' ;
this.city = '' ;
this.age = 0 ;
this.gender = '' ;
this.appointmentDate = new Date() ;
this.appointmentTime = '' ;
this.isFirstVisit = false ;
this.naration = '' ;
this.hospitalId = 0 ;
}
}


export class Patient {
  patientId: number ;
  name: string;
  mobileNo: string;
  city: string;
  age: number;
  gender: string;
  hospitalId: number;

  constructor() {
    this.patientId = 0;
    this.name = '';
    this.mobileNo = '';
    this.city = '';
    this.age = 0;
    this.gender = '';
    this.hospitalId = 0;
  }
}