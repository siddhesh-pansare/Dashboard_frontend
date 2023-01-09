import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {
  data = {
    scode: '',
    camid: '',
    aid: '',
    rid: '',
    cusip: '',
    fcode: '',
    pamid: ''
  }
  constructor() { }
  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
