import { Component } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  topics=['Angular', 'Vue', ' React']
userModel=  new User('rob', ' rob@test.com', 455666)
}
