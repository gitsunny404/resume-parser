import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private uploadedFileUrlSource = new BehaviorSubject<string>("");
  
  uploadedFileUrl$ = this.uploadedFileUrlSource.asObservable();

  setUploadedFileUrl(fileUrl: string) {
    this.uploadedFileUrlSource.next(fileUrl);
  }
}
  