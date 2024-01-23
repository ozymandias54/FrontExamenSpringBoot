import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { Note } from 'src/app/models/note';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-liste',
  templateUrl: './note-liste.component.html',
  styleUrls: ['./note-liste.component.css'],
})
export class NoteListeComponent implements OnInit {
  notes: Note[] = [];
  noteAff?: any[];

  constructor(
    private noteService: NoteService,
  ) {}

  get() {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
      console.log(this.notes);
    });
  }


  isNote1() {
    let compt = 0;
    for (let index = 0; index < this.notes.length; index++) {
      if (this.notes[index].note1 != null) {
        compt++;
      }
    }
    if (compt == 0) {
      return true;
    }
    return false;
  }

  isNote2() {
    let compt = 0;
    for (let index = 0; index < this.notes.length; index++) {
      if (this.notes[index].note2 != null) {
        compt++;
      }
    }
    if (compt == 0) {
      return true;
    }
    return false;
  }

  isExamen() {
    let compt = 0;
    for (let index = 0; index < this.notes.length; index++) {
      if (this.notes[index].examen != null) {
        compt++;
      }
    }
    if (compt == 0) {
      return true;
    }
    return false;
  }


  ngOnInit(): void {
    this.get();
  }
}
