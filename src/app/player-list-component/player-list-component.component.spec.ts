import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponentComponent } from './player-list-component.component';

describe('PlayerListComponentComponent', () => {
  let component: PlayerListComponentComponent;
  let fixture: ComponentFixture<PlayerListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
