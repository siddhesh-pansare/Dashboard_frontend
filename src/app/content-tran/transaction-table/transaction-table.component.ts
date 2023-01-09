import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  seachText: any;
  names = [
    {camId: 10, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},
    {camId: 20, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},
    {camId: 30, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},
    {camId: 40, accTypeCode: 'Tiger', accType: 'Nixon', sourceCode: 'System Architect', accSource: 'Edinburgh'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
