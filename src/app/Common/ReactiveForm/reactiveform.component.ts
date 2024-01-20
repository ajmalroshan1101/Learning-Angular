import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'app-reactiveform',
    templateUrl:'./reactiveform.component.html',
    styleUrls:['./reactiveform.component.css']

})

export class ReactiveFormComponent implements OnInit{

FMbuilder!:FormGroup

ngOnInit(): void {
    
    this.FMbuilder = new FormGroup({
        username: new FormControl(null,[Validators.required]),
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required])
    })
}
submitForm(){
    console.log(this.FMbuilder);
    console.log("click");
    
    
}

}