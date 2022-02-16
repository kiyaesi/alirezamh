import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NahjolbalaghaComponent } from './nahjolbalagha.component';

describe('NahjolbalaghaComponent', () => {
  let component: NahjolbalaghaComponent;
  let fixture: ComponentFixture<NahjolbalaghaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NahjolbalaghaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NahjolbalaghaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
