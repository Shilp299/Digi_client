import {Injectable} from '@angular/core';
import {Request} from './request';


@Injectable()
export class Requests 
{

     private requests: Array<Request> = new Array<Request>();
     private  totalItems: number;
    
      public setRequests (requests: Array<Request>) 
      {
        this.requests = requests;
      }
      public getRequests (): Array<Request> 
      {
        return this.requests;
      }
      public deleteRequest(requestId: string) 
      {
        let requestFound: Request = this.requests.find(request => requestId === request.getId());
        const index: number = this.requests.indexOf(requestFound);
        if (index !== -1) 
        {
          this.requests.splice(index, 1);
          this.totalItems--;
        }
      }
     public addRequest (request: Request) 
     {
        this.requests.push(request);
        this.totalItems++;
      }
    
      public setTotalItems(totalItems: number) 
      {
        this.totalItems = totalItems;
      }
    
      public getTotalItems() 
      {
        return this.totalItems;
      }
    
}
    

