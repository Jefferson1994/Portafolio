import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcurriculumComponent } from './modalcurriculum.component';

describe('ModalcurriculumComponent', () => {
  let component: ModalcurriculumComponent;
  let fixture: ComponentFixture<ModalcurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
