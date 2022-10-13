import {Component, OnInit} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-my-world',
  templateUrl: './my-world.component.html',
  styleUrls: ['./my-world.component.css']
})
export class MyWorldComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  isActive = true;
  data: any;

  onSave() {

    this.data = "You clicked an event Binder";
  }

  values = '';
  name: String = '';
  onKeyUp(event : KeyboardEvent) {
      this.values += (event.target as HTMLInputElement).value;
    console.log(this.values)
  }
}
