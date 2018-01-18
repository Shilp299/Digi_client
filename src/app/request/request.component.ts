import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from './request.service';
import {Request} from './request';
import {Requests} from "./requests";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";



@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;


  constructor(private  requestService: RequestService,
              private requests: Requests , 
              private queryParamsService: QueryParamsService)  {
    this.getRequests(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getRequests(queryParam);
        }
      );
  }

  public getRequests(queryParams: QueryParams) {
    this.requestService.getRequests(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString() + " No requests found");
    });

  }



  public deleteRequest(request: Request) {
    this.requestService.delete(request.getId()).subscribe(data => {

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
 
}

