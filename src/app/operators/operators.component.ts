import { Component, OnInit } from '@angular/core';
import { forkJoin, observable, of, switchMap, } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  ngOnInit(): void {
    //Forkjoin
    let source1= of(1,2,3, 4,5)
    let source2= of('a', 'b', 'c','d','e')
    forkJoin([source1,source2]).subscribe(data =>{
      console.log(data)
    })

    //switchmap
    let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')
 
srcObservable.pipe(
  switchMap( val => {
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(val=> {
  console.log('Read ' + val);
})
  }

}



