import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListComponentComponent } from './match-list-component.component';

describe('MatchListComponentComponent', () => {
  let component: MatchListComponentComponent;
  let fixture: ComponentFixture<MatchListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
