import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { Note } from 'src/app/models/note';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  etudiants?:Etudiant[];
  notes:Note[]=[];

  typenote:boolean=true;

  constructor(private etudiantService:EtudiantService,private noteService:NoteService,private router:Router){}


  ngOnInit(): void {
      this.noteService.getNotes().subscribe((data) => {
        this.notes=data;
        console.log(this.notes);
      });
  }

  soumit():void{
    for (let index = 0; index < this.notes.length; index++) {
      let note=this.notes[index];
      this.noteService.updateNote(note.idNote ,note).subscribe((response) => {
        console.log(response);
        this.router.navigate(['/notes']);
      });
    }
  }

  choixE(){
    this.typenote=true;
  }

  choixN(){
    this.typenote=false;
  }

}
