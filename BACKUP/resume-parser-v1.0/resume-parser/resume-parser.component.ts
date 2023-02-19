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
apiKeyPublic: string = "public_kW15b59D6Qf1fijp8S4EkesQdpY5"; //upload.io
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
    'apikey': '5TNBZhDadTzG6sjOCUobFk8sed85Sk6b' //resumeparserAPI
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
//   // part - 01
//   apiKeyPublic : string = "public_kW15b59D6Qf1fijp8S4EkesQdpY5";
//   uploader = Uploader({ apiKey: this.apiKeyPublic }); // Your real API key.

//   options: UploadWidgetConfig = {
//     multi: true
//   };

//   successFileUpload : boolean = false;
//   uploadedFileUrl = "";

//   onComplete = (files: UploadWidgetResult[]) => {
//     let fileUrl = files[0].fileUrl.replace('/image/', '/raw/'); // replace '/image/' with '/raw/
//     fileUrl = fileUrl.split('?')[0]; // remove query parameters from the URL
//     this.uploadedFileUrl = fileUrl;
//     console.log(this.uploadedFileUrl);
//     this.successFileUpload = true;
//   };

//   // part - 02
//   parsedResumeData: any;

//   constructor(public http : HttpClient){}

//   async onButtonClick() {
//     const headers = new HttpHeaders({
//       'apikey': '5TNBZhDadTzG6sjOCUobFk8sed85Sk6b'
//     });

//     try {
//       const URL = `https://api.apilayer.com/resume_parser/url?url=${this.uploadedFileUrl}`;
//       console.log(URL);

//       const response = await this.http.get(URL, { headers })
//       .toPromise();
//       console.log(response);
//       this.parsedResumeData = response;

//     } 
//     catch (error) {
//       console.log(error);
//     }
//   }

//   // Part - 03
//   firstName : string = '';
//   lastName : string = '';
//   name : string = '';
//   email : string = '';
//   phone : string = '';
//   education : string = '';
//   skills : string = '';
//   address : string = '';
//   github : string = '';
//   linkedin : string = '';
//   experience : string = '';
//   resumeLink : any = '';

//   loadResumeData(){
//     this.name  = this.parsedResumeData.name;
//     console.log(this.name);
//     this.email  = this.parsedResumeData.email;
//     console.log(this.email);
//     this.phone  = this.parsedResumeData.phone;
//     console.log(this.phone);
//     this.education  = this.parsedResumeData.education[0];
//     console.log(this.education);
//     this.skills  = this.parsedResumeData.skills;
//     console.log(this.skills);
//     this.address  = this.parsedResumeData.address;
//     console.log(this.address);
//     this.github  = this.parsedResumeData.github;
//     console.log(this.github);
//     this.linkedin  = this.parsedResumeData.linkedin;
//     console.log(this.linkedin);
//     this.experience  = this.parsedResumeData.experience;
//     console.log(this.experience);
//     this.resumeLink = this.uploadedFileUrl;
//     console.log(this.resumeLink);
//     console.log("THANK YOU >>>>")
//   }
// }

