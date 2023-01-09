import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //names :any;
  private names = new Subject<any>();

  constructor() { }

  // setData(data: any) {
  //   this.names = data;
  //   return this.names;
  // }

  // get() {
  //   console.log("in service", this.names);
  //   return this.names;
  // }
  setData(data: any) {
    this.names.next(data);
  }
  get() {
    return this.names.asObservable();
  }
}
