import { Injectable } from "@angular/core";

@Injectable()

export class CustomServive {

constructor(){}

    public showtohtml(data:number) {
        
        return data*data
    }
}