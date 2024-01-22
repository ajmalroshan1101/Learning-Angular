import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { get } from "../interface/get";

@Injectable()

export class HttpService {

    private apiurl='https://httpmethods-b71d7-default-rtdb.firebaseio.com/task.json'
    constructor(private http:HttpClient){

    }

    getData(){

   return  this.http.get<{[key:string]:get}>(this.apiurl)
     .pipe(map((res)=>{
        // Transform the Data
        console.log(res);
         
        let task=[];
        for (let key in res){
            if(res.hasOwnProperty(key))
            task.push({...res[key] , id:key})
        }

        return task;
     }))
     

    }

    postData(postData:any):Observable<any>{

        return this.http.post<{name:string}>(this.apiurl,postData)

    }
}