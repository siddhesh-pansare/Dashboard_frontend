
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tabs: string[] = [];
  selectedTabIndex = 0;
  @Output() tabAdded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  addTab(data: any) {
    this.tabs.push(`Tab ${this.tabs.length + 1}`);
    //this.tabAdded.emit();
    this.selectedTabIndex=this.tabs.length-1;
  }
  
  closeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selectedTabIndex = Math.min(index, this.tabs.length - 1);
  }
}
