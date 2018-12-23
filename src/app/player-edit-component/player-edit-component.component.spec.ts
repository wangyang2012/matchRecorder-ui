import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEditComponentComponent } from './player-edit-component.component';

describe('PlayerEditComponentComponent', () => {
  let component: PlayerEditComponentComponent;
  let fixture: ComponentFixture<PlayerEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
