import { SiblingsService } from './../../services/siblings.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AssetsDataService } from './../../services/assets-data.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { TabServiceService } from 'src/app/services/tab-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  tabs: string[] = [];
  selectedTabIndex = 0;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  datePickerConfig: Partial<BsDatepickerConfig>;
  dataValue: any;
  names: any;

  constructor(
    private formbuilder: FormBuilder,
    private api: AssetsDataService,
    private sibService: SiblingsService,
    private http: HttpClient,
    private search: SearchService,
    private tabser: TabServiceService
  ) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY',
        //placement: 'top',
        adaptivePosition: true,
      }
    );
  }

  onkey(val: any) {
    console.log(val);
    this.dataValue = val;
  }

  ngOnInit(): void {
    // this.productForm = this.formbuilder.group({
    //   code: ['',Validators.required],
    //   camid: ['',Validators.required],
    //   assetid: ['',Validators.required],
    //   rid: ['',Validators.required],
    //   cusip: ['',Validators.required],
    //   fcode: ['',Validators.required],
    //   paid: ['',Validators.required]
    // })
  }

  sendInfo() {
    //this.sibService.communicateMessage(this.dataValue);
  }
  onSubmit(form: NgForm) {
    const scode = form.value.scode;
    const cid = form.value.cid;
    const aid = form.value.aid;
    const riid = form.value.riid;
    const cusip = form.value.cusip;
    const fcode = form.value.fcode;
    const paid = form.value.paid;

    /**Code added for patching a bug of
     *data visibility without
     any added filter.
     */

    if (scode==="" && cid==="" && aid==="" && riid==="" && cusip==="" && fcode==="" &&paid==="") {
      //create dialogue box for showing no record entered.
      alert("Add at least one field to search")

    } else {
      this.http
        .get('http://localhost:5000/search', {
          params: {
            scode,
            cid,
            aid,
            riid,
            cusip,
            fcode,
            paid,
          },
        })
        .subscribe((response) => {
          console.log('result: ', response);
          this.names = response;
          //console.log("in form", this.search.setData(this.names));
          this.search.setData(this.names);
        });
    }
    //form.reset();
  }

  addTab() {
    this.tabs.push(`Tab ${this.tabs.length + 1}`);
    this.selectedTabIndex = this.tabs.length - 1;
    this.notify.emit(' ');
    this.tabser.setData('');
  }
  resetForm() {}
}
