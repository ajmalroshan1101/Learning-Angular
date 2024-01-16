import { Component ,ViewChild,AfterViewInit, OnInit} from '@angular/core';
import { ViewChildComponent } from './viewChild/viewChild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  title:string="show timer";
  childshow:boolean=false;
  selectedItem!:any;

  @ViewChild(ViewChildComponent)
 private Childcomponent=ViewChildComponent;
  // parentMessage="Ajmal Roshan"

  show(){

    this.childshow=!this.childshow;
    this.title=this.childshow===true?'Hide Timer':'show Timer'
  }

  onselecteditem(item: any) {
    console.log(item);
    
    this.selectedItem = item.name;
    

  }

  ngAfterViewInit(): void {

    console.log('child componenr reference',this.Childcomponent);
    
  }


  triggerChildMethod() {
    // Invoking the doSomething method of the child component
    this.Childcomponent.DoSomething();
  }
  
}
