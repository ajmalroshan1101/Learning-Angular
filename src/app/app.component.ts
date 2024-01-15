import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { ViewChildComponent } from './viewChild/viewChild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'work-1';

  @ViewChild(ViewChildComponent)
 private Childcomponent=ViewChildComponent;
  // parentMessage="Ajmal Roshan"

  ngAfterViewInit(): void {

    console.log('child componenr reference',this.Childcomponent);
    
  }


  triggerChildMethod() {
    // Invoking the doSomething method of the child component
    this.Childcomponent.DoSomething();
  }
  
}
