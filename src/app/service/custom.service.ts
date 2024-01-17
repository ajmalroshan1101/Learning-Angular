import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CanActivateFn} from "@angular/router";

@Injectable()

export class CustomServive{

constructor(){}
    private Mysubject = new Subject<any>();

    shareData$ = this.Mysubject.asObservable();

    sendData(data:any){
      this.Mysubject.next(data)
    }

    public showtohtml(data:number) {
        
        return data*data
    }
}