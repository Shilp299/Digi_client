import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';
import { Quality } from '../quality';
import { QualityService } from '../quality.service';
import { QualityComponent } from '../quality.component';
import { Qualities } from '../qualities';
import { StateService } from '@uirouter/angular';

//declare var jQuery:any;
const qualityState ={name:'quality', url:'/quality', component:QualityComponent};

@Component({
  selector: 'new-quality',
  templateUrl: './new-quality.component.html',
  styleUrls: ['./new-quality.component.scss']
})
 

export class NewQualityComponent implements OnInit {

  private id: string;
  private Title: string;
  private Status: string;
  private Opened: Date;
  private Description: string;
  private Rectified: Date;
  private ProjectId: string;
  private availableProjects: Project[];
   private projectId: string;
  
  constructor(private  qualityservice: QualityService, private projectService: ProjectService,
       private projects: Projects,public qualities:Qualities ,public stateService: StateService)  {
  
  }

    ngOnInit() {
    this.getProjects();
  }
  
  addNewQuality() {
    let quality: Quality = new Quality();
    quality.setId(this.id);
    quality.setTitle(this.Title);
    quality.setStatus(this.Status);
    quality.setOpened(this.Opened);
    quality.setDescription(this.Description);
    quality.setRectified(this.Rectified);
    quality.setProjectId(this.projectId);
    this.qualityservice.save(quality).subscribe(data => {
        console.log(data);
        quality.setId(data);
        this.qualities.addQuality(quality);
         this.stateService.go('quality');
	    
    }, error => {
      window.alert(error._body);
    });
   
  }
  
  getProjects() {
    this.projectService.getProjects(null).subscribe( data => {
      this.availableProjects = this.projects.getProjects();
    }, error => {
      console.log(error._body.toString() + " No projects found");
    });
  }
  
  goBack() {
    window.history.back();
  }
  
}
