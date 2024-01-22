import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListeComponent } from './note-liste.component';

describe('NoteListeComponent', () => {
  let component: NoteListeComponent;
  let fixture: ComponentFixture<NoteListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteListeComponent]
    });
    fixture = TestBed.createComponent(NoteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
