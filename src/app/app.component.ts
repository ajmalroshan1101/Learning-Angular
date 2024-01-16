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

  @ViewChild(ViewChildComponent)
 private Childcomponent=ViewChildComponent;
  // parentMessage="Ajmal Roshan"

  show(){

    this.childshow=!this.childshow;
    this.title=this.childshow===true?'Hide Timer':'show Timer'
  }


  ngAfterViewInit(): void {

    console.log('child componenr reference',this.Childcomponent);
    
  }


  triggerChildMethod() {
    // Invoking the doSomething method of the child component
    this.Childcomponent.DoSomething();
  }
  
}
