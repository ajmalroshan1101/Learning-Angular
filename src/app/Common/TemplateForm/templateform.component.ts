import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-templateform',
    templateUrl:'./templateform.component.html'
})

export class TemplateComponentone{

    @ViewChild('registretion') from!:NgForm;

    OnSubmitForm(){

        console.log(this.from);
        
    }

}