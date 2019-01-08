import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEditComponentComponent } from './match-list-component.component';

describe('MatchListComponent', () => {
  let component: MatchEditComponentComponent;
  let fixture: ComponentFixture<MatchEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
