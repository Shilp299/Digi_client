import { Class } from '@angular/core';

export class Request 
{
    private  id: string;
    private  Description: string;
    private  Status: string;
    private  DOB :Date;
    private Project: string;
    private Raised: string;
    private Action: string;


    constructor() 
    {}
    public setId ( id: string ) 
      {
      this.id = id;
      }
    public getId (): string 
      {
      return this.id ;
      }
    
    public setDescription ( Description: string ) 
    {
      this.Description = Description;
    }
    
    public getDescription (): string 
    {
      return this.Description ;
    }

    public setStatus ( Status: string ) 
    {
      this.Status = Status;
    }

    public getStatus(): string 
    {
      return this.Status ;
    }
    public setDOB (DOB: Date) 
    {
      return DOB = DOB ;
    }
    public getDOB():Date 
    { 
      return this.DOB ;
    }
    public setProject ( Project: string ) 
    {
      this.Project = Project;
    }

    public getProject(): string 
    {
      return this.Project ;
    }
    public setRaised(Raised: string)
    {
        this.Raised =Raised;
    }
    public getRaised():string
    {
    return this.Raised;
    }  
    public setAction(Action: string)
    {
        this.Action =Action;
    }
    public getAction():string
    {
    return this.Action;
    }  


}