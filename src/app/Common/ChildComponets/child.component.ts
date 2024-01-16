import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-childco',
    templateUrl:'./childco.component.html'
})

export class ChildComponent{
    items=[
        {name:'Ajmal'},
        {name:'Roshan'}
    ];

    @Output() selecteditem= new EventEmitter<any>()

    onitemclick(item:any){
        this.selecteditem.emit(item)
    }
}