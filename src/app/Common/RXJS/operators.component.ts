import { Component, OnInit, EventEmitter } from '@angular/core';
import { of, interval, forkJoin, from, Observable } from 'rxjs';
import {
  map,
  filter,
  switchMap,
  take,
  delayWhen,
  delay,
  catchError,
} from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
})
export class OperatorComponent implements OnInit {
  data: any;
  error!: string;
  constructor(private http: HttpClient) {}
  // Create an observable that emits numbers every second
  // numbersObservable = interval(1000);
  numbersObservable = new EventEmitter();
  // Take only 5 values for this example
  firstNnumbers = this.numbersObservable.pipe(take(5));
  // Use .map to double each number
  doubledNumbersObservable = this.numbersObservable.pipe(map((num) => num * 2));
  // Use .forkJoin to combine two observables
  // evenNumbersObservable = n
  // square of each
  // squareObservable = of(1, 2, 3, 4, 5).pipe(map((num) => num * num));
  squareObservable = new EventEmitter();
  variable1: any;
  ngOnInit(): void {
    //showing the doubled result
    // this.doubledNumbersObservable.subscribe(doubledNumber => {
    //   console.log('Doubled Number:', doubledNumber);
    // });
    // const combinedObservable = forkJoin([
    //   this.numbersObservable,
    //   this.squareObservable,
    // ]);
    forkJoin([of(2), of(3), of(22), from([1, 2])]).subscribe((data) => {
      this.variable1 = data;
    });
    //Use .filter to keep only even numbers
    const evenNumbersObservable = this.numbersObservable.pipe(
      filter((num) => num % 2 === 0)
    );
  }
  loadData() {
    this.getData().subscribe(
      (result: any) => {
        this.data = result;
        this.error = 'null';
      },
      (err: any) => {
        this.data = null;
        this.error = 'Failed to load data.';
      }
    );
  }
  getData(): Observable<any> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    return of(apiUrl).pipe(

      switchMap((url) => this.http.get(url)),

      catchError((error: any) => {

        console.error('Error:', error);
        
        return of(null); // Return an observable with a default value on error
      })
    );
  }
}
