import { NgModule } from '@angular/core';
import { ProjectListComponent } from './projectlist.component'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentModule} from '../document/document.module';
import { BoQModule} from '../boq/boq.module';
import { EmployeeModule} from '../employee/employee.module';
import { HttpModule} from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { MeetingModule} from '../meeting/meeting.module';


@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    DocumentModule,
    BoQModule,
    EmployeeModule,
    NgxPaginationModule,
    MeetingModule,
  ],
  exports : [ProjectListComponent],
  providers: [],
  bootstrap: []
})
export class  ProjectListModule { }
