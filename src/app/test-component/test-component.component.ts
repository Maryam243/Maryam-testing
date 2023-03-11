import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../service/service-test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
//  num:number = 10;
constructor(public serviceTest: ServiceTestService){}
  ngOnInit(): void {
    this.serviceTest.myName();
  }

// changeNum(){
//   this.num =100;
// }

evenOdd(num:number){
  //number is even
  if(num % 2 == 0) {
  return("The number is even");
}

//number is odd
else {
  return("The number is odd");
}}

}
