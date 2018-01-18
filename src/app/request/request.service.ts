import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Request} from './request';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Requests} from "./requests";
import {Globals} from "../globals/globals";

@Injectable()
export class RequestService {


  private requestUrl = this.globals.getBackendUrl() +  'request/';

  constructor(private http: Http, private  requests: Requests, private globals: Globals ) {

  }

  public getRequests(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.requestUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const requests: Array<Request> =  new Array<Request>();
          for ( i = 0 ; i < response.length ; i++) {
            const request: Request = new Request();
            request.setId(response[i].id);
            request.setDescription(response[i].Description);
            request.setStatus(response[i].Status);
            request.setDOB(response[i].DOB);
            request.setProject(response[i].project);
            request.setRaised(response[i].Raised);
            request.setAction(response[i].Action);
            requests.push(request)
            requests.push(request);
        
          }
          this.requests.setRequests(requests);
          this.requests.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(request: Request)  {
    const endPoint = this.requestUrl + request.getId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.post(endPoint, request, options)
      .map(res => {
          const res1 = res.json();
          request.setId(res1.id);
          this.requests.addRequest(request);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.requestUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.requests.deleteRequest(res1.id);
        }
      );
  }
}
