import { Project } from '../project/project';
import { Projects } from '../project/projects';
import { ProjectService } from '../project/project.service';
import { StateService } from '@uirouter/angular';
import { ProjectComponent } from '../project/project.component';
import { Component, Input, OnInit } from '@angular/core';
import { QueryParamsService} from '../home/query-obeservables/query-params.service';
import { Subscription} from "rxjs/Subscription";
import { QueryParams} from '../home/query-obeservables/query-params';

// declare var jQuery:any;
const projectState = { name: 'project', url: '/project',  component: ProjectComponent };
@Component({
  selector: 'projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectListComponent implements OnInit
 {

  private projectName: string ;
  private jobNumber: string ;
  private siteAddress: string ;
  private description: string ;
  private startDate: Date ;
  private clientId: string ;
  private phase: string ;

 constructor(private  projectService: ProjectService,private projects: Projects, 
              public stateService: StateService)  {

 }

  

  ngOnInit() {}
 


  // getPage(page: number ){
  //   this.currentPage= page;
  //   this.queryParamsService.setPageNumber( page-1);
  // }

  // ngOnDestroy() {
  //   // unsubscribe to ensure no memory leaks
  //   this.subscription.unsubscribe();
  // }
}