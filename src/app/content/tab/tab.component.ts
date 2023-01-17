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
    flag:boolean = false;
    constructor(
      private tabser: TabServiceService,
      private dialog: MatDialog,
      private http: HttpClient ) { }


    ngOnInit(): void {
      //this.data = this.tabser.getData();
    let data = this.tabser.getData();
    if(typeof data === "object"){
        this.data = data;
    }
    else{
        this.data = {
            scode: '',
            camid: '',
            aid: '',
            rid: '',
            cusip: '',
            fcode: '',
            pamid: ''
        }
    }
    }

    toEdit(data: any){
      this.editing = true;
      this.toShow = false;
      if(Object.values(data).every(x => x === '')){
        this.flag = true;
      }
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
      //console.log(scode);
      if (this.flag) {
        console.log(this.flag);
        console.log(this.data);
        const url = 'http://localhost:5000/fields';
        this.http.post(url, this.data).subscribe(response => {
        console.log(response);
    });
      }
      else{
        console.log(this.flag);
        this.http.put('http://localhost:5000/testy/' + scode, { scode, camid, aid, rid, cusip, fcode, pamid })
        .subscribe((response) => {
          console.log("update", response);
        });
        this.dialog.open(DialogeboxComponent);
    }

  }
  toClear(data: any){
    //data.scode = '';
    data.camid = '';
    data.aid = '';
    data.rid = '';
    data.cusip = '';
    data.fcode = '';
    data.pamid = '';
  }
}
