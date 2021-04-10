import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrganizeComponent } from './user-organize.component';

describe('UserOrganizeComponent', () => {
  let component: UserOrganizeComponent;
  let fixture: ComponentFixture<UserOrganizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrganizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrganizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
