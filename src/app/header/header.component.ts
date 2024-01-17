import { Component, Input, OnInit } from '@angular/core';
import { CustomServive } from '../service/custom.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // variable1 = 'my name is ajmal roshan i like to program'

  constructor(private callingservice: CustomServive) {
    console.log('parent is working');
  }

  @Input() childMsg: string = '';

  ngOnInit(): void {

    this.callingservice.shareData$.subscribe(data=>{
        console.log('Received Data:',data);
        
    })

    console.log('header ng are you working');
    
  }
}
