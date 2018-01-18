import {Component, Input, OnInit} from '@angular/core';
import {QualityService} from './quality.service';
import {Quality} from './quality';
import {Qualities} from "./qualities";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";
import {Project} from '../project/project';
import {Projects} from '../project/projects';
import {ProjectService} from '../project/project.service';


@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})

export class QualityComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  private projectId: string;
  private availableProjects: Project[];

  constructor(private  qualityService: QualityService,private projectService: ProjectService,
              private qualities: Qualities ,private projects: Projects, 
              private queryParamsService: QueryParamsService)  {
    this.getQualities(null);
  }

  ngOnInit() {
    this.getProjects();
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getQualities(queryParam);
        }
      );
  }

  public getQualities(queryParams: QueryParams) {
    this.qualityService.getQualities(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString() + " No products found");
    });

  }



  public deleteQuality(quality: Quality) {
    this.qualityService.delete(quality.getId()).subscribe(data => {

    });
  }

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  getProjects() {
    this.projectService.getProjects(null).subscribe( data => {
      this.availableProjects = this.projects.getProjects();
    }, error => {
      window.alert(error._body);
    });
  }
}

