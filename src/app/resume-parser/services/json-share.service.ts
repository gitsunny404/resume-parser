import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonShareService {

  resumeData: any;

  updateResumeData(data: any) {
    this.resumeData = data;
  }
}
