import { Component, OnInit, ViewChild ,DoCheck} from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { HttpService } from "src/app/service/http-service.service";

@Component({
    selector:'app-get',
    templateUrl:'./get.component.html'
})

export class GetComponent implements OnInit ,DoCheck {

    @ViewChild('form') form1!:NgForm

    data:any[]=[];

    Editmode:boolean=false;

    CurrentNameID:string=''

 constructor(private comserv:HttpService){}

 ngDoCheck(): void {
     this.showData();
 }

 ngOnInit(): void {
     
 this.showData();

 }
 
    showData(){
        this.comserv.getData().subscribe((res)=>{
            this.data=res;
            
        })
    }

    onSubmit(){
 
       const name=this.form1.value.text;
       console.log(name);

       if(!this.Editmode){
        this.comserv.postData({name}).subscribe((res)=>{
            console.log("data"+res);
            

            //Here after inserting the value and submit the input value will clear 
            this.form1.setValue({
                //the text is the name in the input field 
                text:''
            })
        })
        //When the Editmode become true put request will work
       }else{

                
        this.comserv.UpdateData(this.CurrentNameID,{name});
        
        this.form1.setValue({
            //the text is the name in the input field 
            text:''
        })

        this.Editmode=false;
       }
       
    //    this.showData();
    }

    deletebtn(id:string){

        console.log(id);
        
        //Here the id is sending to service for deleting item from the database
        this.comserv.DeleteData(id);

        // this.showData();

    }

    Updatebtn(id:string){

       const currentData = this.data.find((p)=>{
            return p.id===id
        });

        console.log(currentData);
        
        this.CurrentNameID=currentData.id;

        this.form1.setValue({
            text:currentData.name
        })




        this.Editmode=true;
    }
}