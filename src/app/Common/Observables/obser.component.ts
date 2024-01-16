import { Component ,EventEmitter, OnInit} from "@angular/core";
import { BehaviorSubject, from, interval, observable, of } from 'rxjs';
import { concatMap, delay, delayWhen } from 'rxjs/operators';

@Component({
    
    selector:'app-obser',
    templateUrl:'./obser.component.html'
})

export class ObserComponent {

//-------------------------------------------------------observable------------------------------------------------------------------
//   time = new Observable<string>((observer) => {
//     setInterval(() => observer.next(new Date().toString()), 500);
//   });
//   currentGlobalVari: any;
//   nextVariable: any;
//   ngOnInit() {
//     this.time.subscribe({
//       next: (data) => {
//         this.currentGlobalVari = data;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//     this.time.subscribe((data) => {
//       this.nextVariable = data;
//     });
//   }
//-------------------------------------------------------observable------------------------------------------------------------------
//-------------------------------------------------------behaviour subject------------------------------------------------------------------
  //   time = new BehaviorSubject<string>(new Date().toString())
  //   currentGlobalVari: any;
  //   nextVariable: any;
  //   ngOnInit() {
  //     this.time.subscribe({
  //         next: (data) => {
  //             this.currentGlobalVari = data;
  //         },
  //         error: (err) => {
  //             console.log(err);
  //         }
  //     })
  //     this.time.subscribe((data) => {
  //         this.nextVariable = data;
  //     })
  //     setInterval(() => this.time.next(new Date().toString()), 500);
  //   }
//-------------------------------------------------------behaviour subject------------------------------------------------------------------
//-------------------------------------------------------Event Emitter------------------------------------------------------------------
// time = new EventEmitter<string>();
//   currentGlobalVari: any;
//   nextVariable: any;
//   ngOnInit() {
//     setInterval(() => this.time.emit(new Date().toString()), 500)
//     this.time.subscribe({
//       next: (data: string) => {
//         this.currentGlobalVari = data;
//       },
//       error: (err: any) => {
//         console.log(err);
//       },
//     });
//     this.time.subscribe((data) => {
//       this.nextVariable = data;
//     });
//   }
//-------------------------------------------------------Event Emitter------------------------------------------------------------------
// -------------------------------------------------behaviour SUbject-----------------------------------------------------------------
      // myBehaviorSubject = new BehaviorSubject<number>(0);
      // ngOnInit(){
      //   this.myBehaviorSubject.subscribe((value)=>{
      //     console.log(value);
      //   })
      //   this.myBehaviorSubject.next(2)
      //   this.myBehaviorSubject.next(4)
      //   this.myBehaviorSubject.next(8)
      // }
// -------------------------------------------------behaviour SUbject-----------------------------------------------------------------
//  -------------------------------------------------creating of -------------------------------------------------------------
        // data=of(2,3,4,5,6,7,8,9,10)
        // ngOnInit(){
        //   this.data.subscribe({
        //     next:(val)=>{
        //       console.log(val);
        //     },
        //     error:(err)=>{
        //       console.log(err);
        //     }
        //   })
        // }
//  -------------------------------------------------creating of -------------------------------------------------------------
data=from(['a','b','c','r','h'])
ngOnInit() {
 this.data.pipe(
 //  delay(1000)
 delayWhen(() => interval(Math.random() * 5000))
 ).subscribe({
   next: (val) => {
     console.log(val);
   },
   error: (err) => {
     console.log(err);
   },
 });
}
//  -------------------------------------------------creating of -------------------------------------------------------------
//  -------------------------------------------------creating intervel -------------------------------------------------------------
// data=interval(2000)
// ngOnInit(){
//   this.data.subscribe({
//     next:(val)=>{
//       console.log(val);
//     },
//     error(err) {
//         console.log(err);
//     },
//   })
// }

}