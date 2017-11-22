import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadoresComponent } from './organizadores.component';

describe('OrganizadoresComponent', () => {
  let component: OrganizadoresComponent;
  let fixture: ComponentFixture<OrganizadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
