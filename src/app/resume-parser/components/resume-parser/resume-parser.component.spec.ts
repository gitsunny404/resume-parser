import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeParserComponent } from './resume-parser.component';

describe('ResumeParserComponent', () => {
  let component: ResumeParserComponent;
  let fixture: ComponentFixture<ResumeParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeParserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
