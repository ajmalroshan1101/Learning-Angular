import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-ondestroy',
  templateUrl: './ondestory.component.html',
})
export class OndestoryComponent implements OnDestroy {
  time: number = 0;
  timer: number = 0;

  subscribeId: Subscription[] = [];

//   interval is rxjs operator it return observal
  observable = interval(1000);

  changetime() {

    this.timer = this.time;

    //Each obesrvable is stored to this id
    const id = this.observable.subscribe((value) => {

      this.timer = this.timer - 1;

      console.log(this.timer);

    //   when the timer reach to zero it will unsubscribe
      if (this.timer <= 0) {

        
        //    this.subscribeId?.[0].unsubscribe()
        //     this.subscribeId.shift()


        for (let i = 0; i < this.subscribeId.length; i++) {
          this.subscribeId[i].unsubscribe();
        }
      }
    });
    console.log(this.subscribeId);

    //The stored id is push to subscribeId
    this.subscribeId.push(id);
  }
//   Here when the component is fall false ngOnDestory will work and unsubscribe the subscribate observables
  ngOnDestroy(): void {
    this.subscribeId?.[0].unsubscribe();
  }
}
