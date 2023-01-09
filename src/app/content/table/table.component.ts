import { ContentComponent } from './../content.component';
import { SiblingsService } from './../../services/siblings.service';
import { AssetsDataService } from './../../services/assets-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {TabServiceService} from './../../services/tab-service.service'
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output()
  notify:EventEmitter<string>=new EventEmitter<string>();
  tabs: string[] = [];
  selectedTabIndex = 0;
  selectedRow:any;
  // searchText : any;
  searchText2:any;
  searchText3:any;
  searchText4:any;
  searchText5:any;
  searchText6:any;
  searchText7:any;
  searchText8:any;
  editing:boolean = false;  
  toShow:boolean = true; 
  //names:any;
  names: any =[];
  
  title = 'learnApi';
  constructor(private userData: AssetsDataService, private sibService: SiblingsService, private http: HttpClient, private tabser: TabServiceService, private search: SearchService){
    // this.names = this.search.get();
    // console.log("in table", this.search.get());
    //console.log(this.names); 

    this.search.get().subscribe((data) => {
      this.names = data;
    });
    
  }
   
  ngOnInit(): void {
    this.userData.asset().subscribe((data)=> {
      console.log("data", data)
      //this.names = data;
    });
    // this.sibService.sendMessage.subscribe(message=>{
    //   //console.log("B : " + message);
    //   this.searchText2 = message;
    // })
    
  }
   save({ scode, camid, aid, rid, cusip, fcode, pamid }: any){
    this.editing = false;
    this.toShow = true;
    this.http.put('http://localhost:5000/testy/' + scode, { scode, camid, aid, rid, cusip, fcode, pamid })
    .subscribe((response) => {
      console.log("res", response);
    });
  }

  edit(){
    this.editing = true
    this.toShow = false;
  }

  // openTab(){
  //   this.cont.selectedTabIndex = 1;
  //   console.log("Tab clicked")
  // }
  addTabin(data:any){
    this.tabs.push(` Tab ${this.tabs.length + 1}`);
    this.selectedTabIndex=this.tabs.length-1;
    this.notify.emit("");
    console.log(data);
    this.tabser.setData(data);
 }
}
