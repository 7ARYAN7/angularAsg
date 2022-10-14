import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  message='' ;
  constructor() { }

  sendDetailsToWelcome({data}: { data: any }){
    this.message = data;
  }


  recieveDetailsFromBody(){
    console.log(this.message);
     return this.message;
  }
}
