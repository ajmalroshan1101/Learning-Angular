import { Component, OnInit, ViewChild } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { HttpService } from "src/app/service/http-service.service";

@Component({
    selector:'app-get',
    templateUrl:'./get.component.html'
})

export class GetComponent implements OnInit {

    @ViewChild('form') form1!:NgForm

    data:any[]=[];

 constructor(private comserv:HttpService){}

 ngOnInit(): void {
     


 }
 
    showData(){
        this.comserv.getData().subscribe((res)=>{
            this.data=res;
            console.log(this.data);
            
        })
    }

    onSubmit(){
 
       const name=this.form1.value.text;
       console.log(name);

       if(name){
        this.comserv.postData({name}).subscribe((res)=>{
            console.log("data"+res);
            this.showData();
        })
       }
       
    }
}