import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranRecitationComponent } from './quran-recitation.component';

describe('QuranRecitationComponent', () => {
  let component: QuranRecitationComponent;
  let fixture: ComponentFixture<QuranRecitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuranRecitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranRecitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
