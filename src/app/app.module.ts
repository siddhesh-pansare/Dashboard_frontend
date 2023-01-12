import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './content/form/form.component';
import { TableComponent } from './content/table/table.component';
import { ContentTranComponent } from './content-tran/content-tran.component';
import { TransactionTableComponent } from './content-tran/transaction-table/transaction-table.component';
import { TransactionFormComponent } from './content-tran/transaction-form/transaction-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SearchfilterPipe } from './searchfilter.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { TabComponent } from './content/tab/tab.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogeboxComponent } from './content/dialogebox/dialogebox.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FormComponent,
    TableComponent,
    ContentTranComponent,
    TransactionTableComponent,
    TransactionFormComponent,
    SearchfilterPipe,
    TabComponent,
    DialogeboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule
  ],
  //entryComponents:[MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
