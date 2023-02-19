import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { JsonShareService } from '../../services/json-share.service';

@Component({
  selector: 'app-second-send-url-get-json',
  templateUrl: './second-send-url-get-json.component.html',
})
export class SecondSendURLGetJSONComponent {

  constructor(private fileService: FileUploadService, public http : HttpClient, public resumeDataService : JsonShareService ) {}

  uploadedFileUrl: string = "";

  getFileUrl() {
      this.fileService.uploadedFileUrl$.subscribe(fileUrl => {
        this.uploadedFileUrl = fileUrl;
      });
  }

  parsedResumeData: any;

  async onButtonClick() {
    const headers = new HttpHeaders({
      'apikey': '5TNBZhDadTzG6sjOCUobFk8sed85Sk6b'
    });

    try {
      const URL = `https://api.apilayer.com/resume_parser/url?url=${this.uploadedFileUrl}`;
      console.log(URL);

      const response = await this.http.get(URL, { headers })
      .toPromise();
      console.log(response);
      this.parsedResumeData = response;
      // storing and sharing
      this.resumeDataService.updateResumeData(this.parsedResumeData);

    } 
    catch (error) {
      console.log(error);
    }
  }

}
