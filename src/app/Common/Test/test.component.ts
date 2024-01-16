import { Component, DoCheck, OnInit } from "@angular/core";
import { CustomServive } from "src/app/service/custom.service";

@Component({
    selector:'app-test',
    templateUrl:'./test.component.html'
})

export class TestComponent implements DoCheck {

 constructor(private Dataservice:CustomServive){

 }

 num!:number;
showData:number=0;

 ngDoCheck(): void {
     
  this.showData = this.Dataservice.showtohtml(this.num);

 }

}