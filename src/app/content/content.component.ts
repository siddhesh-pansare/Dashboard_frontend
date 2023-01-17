
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tabs: string[] = [];
  camIds: string[]=[];
  selectedTabIndex = 0;

  @Output() tabAdded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addTab(data: any) {
    this.tabs.push(`Tab ${this.tabs.length + 1}`);
    this.camIds.push('Add New');
    //this.tabAdded.emit();
    this.selectedTabIndex=this.tabs.length-1;
  }

  recCamId($event:string) {
    this.tabs.push(`Tab ${this.tabs.length + 1}`);
    this.camIds.push($event);
    console.log('rec cam id:'+ $event);

    //this.tabAdded.emit();
    this.selectedTabIndex=this.tabs.length-1;
  }

  closeTab(index: number) {
    this.tabs.splice(index, 1);
    this.camIds.splice(index, 1);
    this.selectedTabIndex = Math.min(index, this.tabs.length - 1);
  }
}
