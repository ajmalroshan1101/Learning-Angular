import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[List1]'
})
export class Hostlisting implements OnInit {

    constructor(private ELL:ElementRef,private Render:Renderer2){

    }

    ngOnInit(): void {
        
        // this.ELL.nativeElement.style.backgroundColor="yellow"
        // this is custom directive 
    } 

    @HostListener('click')click(){

        this.Render.setStyle(this.ELL.nativeElement,'backgroundColor','red')
    }
}