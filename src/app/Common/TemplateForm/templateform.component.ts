import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls:['./templateform.component.css']
})
export class TemplateComponentone {
  @ViewChild('registretion') from!: NgForm;

  OnSubmitForm() {
    console.log(this.from);

    const { username, email, password } = this.from.value;

    console.log(username, email, password);
  }
}
