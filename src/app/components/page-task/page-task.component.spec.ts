import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTaskComponent } from './page-task.component';

describe('PageTaskComponent', () => {
  let component: PageTaskComponent;
  let fixture: ComponentFixture<PageTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTaskComponent]
    });
    fixture = TestBed.createComponent(PageTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
