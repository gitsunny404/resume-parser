import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { JsonShareService } from '../../services/json-share.service';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
})
export class ThirdFormComponent {
  
  uploadedFileUrl: string | undefined;

  constructor(private resumeDataService: JsonShareService, public fileService : FileUploadService) {}

  thirdForm(){
    console.log("THIRD", this.resumeDataService.resumeData);
  }
  
  firstName : string = '';
  lastName : string = '';

  name : string = '';
  email : string = '';
  phone : string = '';
  education : string = '';
  skills : string = '';
  address : string = '';
  github : string = '';
  linkedin : string = '';
  experience : string = '';
  resumeLink : any = '';


  loadResumeData(){
    this.name  = this.resumeDataService.resumeData.name;
    console.log(this.name);
    this.email  = this.resumeDataService.resumeData.email;
    console.log(this.email);
    this.phone  = this.resumeDataService.resumeData.phone;
    console.log(this.phone);
    this.education  = this.resumeDataService.resumeData.education;
    console.log(this.education);
    this.skills  = this.resumeDataService.resumeData.skills;
    console.log(this.skills);
    this.address  = this.resumeDataService.resumeData.address;
    console.log(this.address);
    this.github  = this.resumeDataService.resumeData.github;
    console.log(this.github);
    this.linkedin  = this.resumeDataService.resumeData.linkedin;
    console.log(this.linkedin);
    this.experience  = this.resumeDataService.resumeData.experience;
    console.log(this.experience);

    this.fileService.uploadedFileUrl$.subscribe(fileUrl => {
      this.uploadedFileUrl = fileUrl;
    });

    this.resumeLink = this.uploadedFileUrl;

    
    console.log(this.resumeLink);
    
    console.log("THANK YOU >>>>")
  }

}
