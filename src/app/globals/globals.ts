/**
 * Created by gipai on 10/8/2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class Globals{

  private backEndUrl = 'http://localhost:8080/api/';

  public getBackendUrl() : string {
    return this.backEndUrl;
  }
}
