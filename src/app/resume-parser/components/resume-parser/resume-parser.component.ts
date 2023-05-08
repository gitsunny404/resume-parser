import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';

@Component({
  selector: 'app-resume-parser',
  templateUrl: './resume-parser.component.html',
  styleUrls: ['./resume-parser.component.css']
})
export class ResumeParserComponent {

  
  parsedResumeData: any ;
  name: any;
  email: any;
  phone: any;
  education: any;
  skills: any;
  address: any;
  github: any;
  linkedin: any;
  experience: any;
  resumeLink: string | undefined;

  constructor(public http : HttpClient){}
  // Part - 01
apiKeyPublic: string = "public_W142hpr5pwEfFeVWCWgSAQqrSTYk"; //upload.io
uploader = Uploader({ apiKey: this.apiKeyPublic }); // Your real API key.

options: UploadWidgetConfig = {
  multi: true
};

successFileUpload: boolean = false;
uploadedFileUrl = "";

onComplete = async (files: UploadWidgetResult[]) => {
  let fileUrl = files[0].fileUrl.replace('/image/', '/raw/'); // replace '/image/' with '/raw/
  fileUrl = fileUrl.split('?')[0]; // remove query parameters from the URL
  this.uploadedFileUrl = fileUrl;
  console.log(this.uploadedFileUrl);
  this.successFileUpload = true;

  const headers = new HttpHeaders({
    'apikey': 'fl4X7Ni7ZRzdZM1Paoc5LqiF5EtEaxHt' //resumeparserAPI
  });

  try {
    const URL = `https://api.apilayer.com/resume_parser/url?url=${this.uploadedFileUrl}`;
    console.log(URL);

    const response = await this.http.get(URL, { headers })
      .toPromise();
    console.log(response);
    this.parsedResumeData = response;

    // Fill the input fields with the parsed resume data
    this.name = this.parsedResumeData.name;
    console.log(this.name);
    this.email = this.parsedResumeData.email;
    console.log(this.email);
    this.phone = this.parsedResumeData.phone;
    console.log(this.phone);
    this.education = this.parsedResumeData.education[0];
    console.log(this.education);
    this.skills = this.parsedResumeData.skills;
    console.log(this.skills);
    this.address = this.parsedResumeData.address;
    console.log(this.address);
    this.github = this.parsedResumeData.github;
    console.log(this.github);
    this.linkedin = this.parsedResumeData.linkedin;
    console.log(this.linkedin);
    this.experience = this.parsedResumeData.experience;
    console.log(this.experience);
    this.resumeLink = this.uploadedFileUrl;
    console.log(this.resumeLink);
    console.log("THANK YOU >>>>");
  }
  catch (error) {
    console.log(error);
  }
};

}