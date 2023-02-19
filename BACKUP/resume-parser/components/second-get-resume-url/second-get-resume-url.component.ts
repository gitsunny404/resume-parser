import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-second-get-resume-url',
  templateUrl: './second-get-resume-url.component.html',
})
export class SecondGetResumeUrlComponent {

  constructor(private fileService: FileUploadService) {}

  uploadedFileUrl: string = "";

  getFileUrl() {
      this.fileService.uploadedFileUrl$.subscribe(fileUrl => {
        this.uploadedFileUrl = fileUrl;
      });
  }

}
