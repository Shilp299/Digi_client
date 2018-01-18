import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Quality} from './quality';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Qualities} from "./qualities";
import {Globals} from "../globals/globals";

@Injectable()
export class QualityService {


  private qualityUrl = this.globals.getBackendUrl() +  'quality/';

  constructor(private http: Http, private  qualities: Qualities, private globals: Globals ) {

  }

  public getQualities(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.qualityUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const qualities: Array<Quality> =  new Array<Quality>();
          for ( i = 0 ; i < response.length ; i++) {
            const quality: Quality = new Quality();
            quality.setTitle(response[i].Title);
            quality.setStatus(response[i].Status);
            quality.setOpened(response[i].Opened);
            quality.setDescription(response[i].Description);
            quality.setRectified(response[i].Rectified);
            qualities.push(quality);
        
          }
          this.qualities.setQualities(qualities);
          this.qualities.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(quality: Quality)  {
    const endPoint = this.qualityUrl + quality.getId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.post(endPoint, quality, options)
      .map(res => {
          const res1 = res.json();
          quality.setId(res1.id);
          this.qualities.addQuality(quality);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.qualityUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.qualities.deleteQuality(res1.id);
        }
      );
  }
}
