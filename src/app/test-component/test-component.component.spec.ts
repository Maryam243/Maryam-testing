import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceTestService } from '../service/service-test.service';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;
  let serviceTest: ServiceTestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentComponent);
    serviceTest = TestBed.inject(ServiceTestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('test that num value is 10',function(){
//     expect(component.num).toEqual(10)
   
//  })

it('Test that num value is even if Divide the number by 2 equals 0,return The number is even',()=>{
  expect(component.evenOdd(10)).toEqual("The number is even");
});

it('Test that num value is even if Divide the number by 2 equals 0,return The number is odd',()=>{
  expect(component.evenOdd(5)).toEqual("The number is odd");
});

it('Test that component call test service and return my name ',()=>{
  spyOn(serviceTest,"myName");
  component.ngOnInit();
  expect(serviceTest.myName).toHaveBeenCalled();
});

});
