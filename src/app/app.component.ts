import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';

  arr1 = [1,2,3,4,5,6,7,8,9];
  arr2 = ["a","b","c","d"];

  arrObservarable = from(this.arr1);//one by one
  arr2Observarable = of(this.arr2);//whole array


  modArrObservarable = this.arrObservarable.pipe(map((val)=>{
    return val*5;
  }), filter((val)=>{
    return val >= 20;
  }));

  myObservarable = new Observable((observer)=>{
    console.log("observerable started---");
    setTimeout(() => {
      observer.next("1");
    }, 1000);
    setTimeout(() => {
      observer.next("2");
    }, 2000);
    setTimeout(() => {
      observer.error("error occured"); //next line will not exicute after error
    }, 3000);
    setTimeout(() => {
      observer.next("3");
    }, 4000);
    setTimeout(() => {
      observer.complete();//next line will not exicute after complete
    }, 5000);
    setTimeout(() => {
      observer.next("4");
    }, 6000);

  });


  ngOnInit(): void {

    this.arrObservarable.subscribe((val)=>{
      console.log(val);
    });

    this.modArrObservarable.subscribe((val)=>{
      console.log(val);
    });


    this.myObservarable.subscribe((val)=>{
      console.log(val);
    }, (error)=>{
      console.log(error);
    }, ()=>{
      console.log("complted");
    });

  }

}
