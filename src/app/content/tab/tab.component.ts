import { DialogeboxComponent } from './../dialogebox/dialogebox.component';
import { Component, OnInit } from '@angular/core';
import {TabServiceService} from './../../services/tab-service.service'
import { MatDialog } from '@angular/material/dialog';
import { HttpClient,HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  data = {
    scode: '',
    camid: '',
    aid: '',
    rid: '',
    cusip: '',
    fcode: '',
    pamid: ''
  }
  editing:boolean = false;  
  toShow:boolean = true;
  constructor(private tabser: TabServiceService, private dialog: MatDialog,private http: HttpClient ) { }

  ngOnInit(): void {
    this.data = this.tabser.getData();
  }

  toEdit(){
    this.editing = true
    this.toShow = false;
  }

  save(data: any){
    this.editing = false;
    this.toShow = true;
    var scode = data.scode;
    var camid = data.camid;
    var aid = data.aid;
    var rid = data.rid;
    var cusip = data.cusip;
    var fcode = data.fcode;
    var pamid = data.pamid;
    console.log(scode);
    this.http.put('http://localhost:5000/testy/' + scode, { scode, camid, aid, rid, cusip, fcode, pamid })
    .subscribe((response) => {
      console.log("res", response);
    });
    this.dialog.open(DialogeboxComponent);
  }
  toClear(data: any){
    data.scode = '';
    data.camid = '';
    data.aid = '';
    data.rid = '';
    data.cusip = '';
    data.fcode = '';
    data.pamid = '';
  }
}
