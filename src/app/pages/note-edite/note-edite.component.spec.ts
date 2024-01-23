import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditeComponent } from './note-edite.component';

describe('NoteEditeComponent', () => {
  let component: NoteEditeComponent;
  let fixture: ComponentFixture<NoteEditeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteEditeComponent]
    });
    fixture = TestBed.createComponent(NoteEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
