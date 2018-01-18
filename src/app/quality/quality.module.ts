import { NgModule } from '@angular/core';
import { QualityComponent } from './quality.component';
import {QualityService} from './quality.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewQualityModule} from './new/new-quality.module';
import {Qualities} from './qualities';
import {NgxPaginationModule} from 'ngx-pagination';
import {ProjectListModule} from '../Projectlist/projectlist.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewQualityModule,
    
 
  ],
  declarations: [
    QualityComponent
  ],
  exports : [    QualityComponent  ],
  providers: [Qualities,
              QualityService
              ],
  bootstrap: []
})
export class  QualityModule { }
