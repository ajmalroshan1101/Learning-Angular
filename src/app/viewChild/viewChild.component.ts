import { Component } from "@angular/core";

@Component({
    selector:'app-view-chlid',
    templateUrl:'./viewChild.component.html',
})

export class ViewChildComponent {
    static DoSomething() {
      throw new Error('Method not implemented.');
    }

    recivedMessage:string='ajmal'

    DoSomething(){

        this.recivedMessage='hello world'
    }
}