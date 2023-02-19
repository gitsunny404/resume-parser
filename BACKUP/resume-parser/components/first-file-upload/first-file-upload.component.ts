import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-first-file-upload',
  templateUrl: './first-file-upload.component.html',
})
export class FirstFileUploadComponent {

  apiKeyPublic : string = "public_kW15b59D6Qf1fijp8S4EkesQdpY5";
  uploader = Uploader({ apiKey: this.apiKeyPublic }); // Your real API key.

  options: UploadWidgetConfig = {
    multi: true
  };

  successFileUpload : boolean = false;

  constructor(private fileService: FileUploadService) {}

  onComplete = (files: UploadWidgetResult[]) => {
    let fileUrl = files[0].fileUrl.replace('/image/', '/raw/'); // replace '/image/' with '/raw/
    fileUrl = fileUrl.split('?')[0]; // remove query parameters from the URL
    this.uploadedFileUrl = fileUrl;
    console.log(this.uploadedFileUrl);
    this.successFileUpload = true;
    this.fileService.setUploadedFileUrl(this.uploadedFileUrl);
  };

  uploadedFileUrl = "";
}
  
