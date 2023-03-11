import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor() { }

  public myName(){
    return "Maryam Mohammed"
  }
}
