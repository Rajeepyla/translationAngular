import { Component, OnInit } from '@angular/core';
import {  interval, Observable, Subject, BehaviorSubject, of, from  } from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  obs = new Observable((observer) => {
    console.log("Observable starts")
      observer.next("1")
      observer.next("2")
      observer.next("3")
      observer.next("4")
      observer.next("5")
  })
  ngOnInit() {
    this.obs.subscribe(
      val=> { console.log(val) },
      error => { console.log("error")},
      () => {console.log("Completed")}
    )  



    const array=[1,2,3,4,5,6,7]
    const obsof1=of(array);
    obsof1.subscribe(val => console.log(val),
             error=> console.log("error"),
            () => console.log("complete"))


            // from 
            const obsfrom2 = from('Hello World');
            obsfrom2.subscribe(val => console.log(val),
              error => console.log("error"),
              () => console.log("complete"))  
  }
 

  
}