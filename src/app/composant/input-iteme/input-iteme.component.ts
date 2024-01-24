import { Component, Input } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-input-iteme',
  templateUrl: './input-iteme.component.html',
  styleUrls: ['./input-iteme.component.css']
})
export class InputItemeComponent {
  constructor(private noteService:NoteService){}
@Input() etudiant:Etudiant=new Etudiant();


insertNote(){

}
}
