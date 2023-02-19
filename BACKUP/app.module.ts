import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UploaderModule } from 'angular-uploader';
import { FirstFileUploadComponent } from './resume-parser/components/first-file-upload/first-file-upload.component';
import { SecondGetResumeUrlComponent } from './resume-parser/components/second-get-resume-url/second-get-resume-url.component';
import { SecondSendURLGetJSONComponent } from './resume-parser/components/second-send-url-get-json/second-send-url-get-json.component';

import { HttpClientModule } from '@angular/common/http';
import { ThirdFormComponent } from './resume-parser/components/third-form/third-form.component';
import { FormsModule } from '@angular/forms';
import { ResumeParserComponent } from './resume-parser-v1.0/resume-parser/resume-parser.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstFileUploadComponent,
        SecondGetResumeUrlComponent,
        SecondSendURLGetJSONComponent,
        ThirdFormComponent,
        ResumeParserComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UploaderModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
