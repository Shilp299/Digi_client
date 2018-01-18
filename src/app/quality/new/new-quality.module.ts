import { NgModule } from '@angular/core';
import { NewQualityComponent } from './new-quality.component';
import { QualityComponent } from '../quality.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule} from '@uirouter/angular';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule 

  ],
  declarations: [
    NewQualityComponent
  ],
  exports : [NewQualityComponent],
  providers: [],
  bootstrap: []
})
export class  NewQualityModule { }
