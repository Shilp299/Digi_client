import { Class } from '@angular/core';


export class Quality {
  
  private id: string;
  private Title: string;
  private status: string;
  private Opened: Date;
  private shortDescription: string;
  private targetEnddate: Date;
  private ProjectId: string;
  private ProjectName : string;

  constructor() {
  }
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  public setStatus ( status: string ) {
    this.status = status;
  }
  public getStatus (): string {
    return this.status ;
  }
  public setTitle ( Title: string ) {
    this.Title = Title;
  }
  public getTitle (): string {
    return this.Title ;
  }
  public setOpened ( Opened: Date ) {
    this.Opened = Opened;
  }
  public getOpened (): Date {
    return this.Opened ;
  }
  public setDescription ( shortDescription: string ) {
    this.shortDescription = shortDescription;
  }
  public getDescription (): string {
    return this.shortDescription ;
  }
  public setRectified ( targetEnddate: Date ) {
    this.targetEnddate = targetEnddate;
  }
  public getRectified (): Date {
    return this.targetEnddate ;
  }
  public setProjectId ( ProjectId: string ) {
    this.ProjectId = ProjectId;
  }
  public getProjectId (): string {
    return this.ProjectId ;
  }
  public setProjectName ( ProjectName: string ) {
    this.ProjectName = ProjectName;
  }
  public getProjectName (): string {
    return this.ProjectName ;
  }

}
