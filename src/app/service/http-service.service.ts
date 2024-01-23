import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { get } from "../interface/get";

@Injectable()

export class HttpService {

    private apiurl='https://httpmethods-b71d7-default-rtdb.firebaseio.com/task.json'
    constructor(private http:HttpClient){

    }

    // GET request
    getData(){

   return  this.http.get<{[key:string]:get}>(this.apiurl)
     .pipe(map((res)=>{
        // Transform the Data
         
        let task=[];
        for (let key in res){
            if(res.hasOwnProperty(key))
            task.push({...res[key] , id:key})
        }

        return task;
     }))
     

    }

    // POST Request
    postData(postData:any):Observable<any>{

        return this.http.post<{name:string}>(this.apiurl,postData)

    }

    // DELETE Request
    DeleteData(id:string){

        console.log("server "+id);
        
        this.http.delete('https://httpmethods-b71d7-default-rtdb.firebaseio.com/task/'+id+'.json')
        .subscribe((res)=>{
            console.log('deleted');
            
        });
    }

    //PUT Request
    UpdateData(id:string,value:get){

        this.http.put('https://httpmethods-b71d7-default-rtdb.firebaseio.com/task/'+id+'.json',value)
        .subscribe();
    }
}