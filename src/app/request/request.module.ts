import { NgModule } from '@angular/core';
import { RequestComponent } from './request.component';
import {RequestService} from './request.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewRequestModule} from './new/new-request.module'
import {Requests} from './requests'
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewRequestModule,
    
 
  ],
  declarations: [ RequestComponent],
  exports : [    RequestComponent  ],
  providers: [Requests,
              RequestService
              ],
  bootstrap: []
})
export class  RequestModule { }
