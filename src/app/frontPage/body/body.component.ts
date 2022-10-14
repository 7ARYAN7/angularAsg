import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginDataService} from "../loginService/login-data.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  message= '';
  public useForm = FormData;
  constructor(private router: Router , private shared:LoginDataService) {
  }
  something({data}: { data: any }){

    this.message=data.name;
    this.shared.sendDetailsToWelcome({data: this.message});
    console.log(this.message);
    this.router.navigate(['/welcome'])
  }
  ngOnInit(): void {

  }
   loginForm= new FormGroup({
     name:new FormControl('',Validators.required),
   email: new FormControl('',Validators.required),
   password: new FormControl('',Validators.required)
   })
   get email(){
    return this.loginForm.get('email')
   }


}
