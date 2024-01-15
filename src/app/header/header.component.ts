import { Component ,Input } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})

export class HeaderComponent{
    // variable1 = 'my name is ajmal roshan i like to program'

    constructor(){
        
        console.log("parent is working");
        
    }

    @Input() childMsg:string ='';


}