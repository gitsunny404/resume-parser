import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeParserComponent } from './resume-parser/components/resume-parser/resume-parser.component';
import { HttpClientModule} from '@angular/common/http';
import { UploaderModule } from 'angular-uploader';

@NgModule({
  declarations: [
    AppComponent,
    ResumeParserComponent
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        UploaderModule,
        HttpClientModule,
        FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
