import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-edite',
  templateUrl: './note-edite.component.html',
  styleUrls: ['./note-edite.component.css']
})
export class NoteEditeComponent implements OnInit {

  note: Note = new Note();
  id: number = 1;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isNote2() {
      if (this.note.note2 != null) {
        return true;
      }
      return false;
  }

  isExamen() {
    if (this.note.examen != null) {
      return true;
    }
    return false;
}

onSubmit(){
  this.noteService.updateNote(this.id, this.note).subscribe(
    (response) => {
      console.log(response);
      this.router.navigate(['/notes']);
    },
    (error) => console.log(error)
  );
}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.noteService.getNote(this.id).subscribe(
      (data) => {
        this.note = data;
      },
      (error) => console.log(error)
    );
  }

}