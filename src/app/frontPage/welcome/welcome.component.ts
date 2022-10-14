import { Component, OnInit } from '@angular/core';
import {LoginDataService} from "../loginService/login-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private shared:LoginDataService) { }
   message: string | undefined;
  ngOnInit(): void {
    this.message = this.shared.recieveDetailsFromBody()
  }

}
