import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[customdirevtive]'
})

export class customdirevtive implements OnInit{
constructor(private elementRef:ElementRef){
    
}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background="red";
    }
}