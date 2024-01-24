import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>("http://localhost:8080/note/read");
  }
  getNote(id:number): Observable<Note>{
    return this.http.get<Note>(`http://localhost:8080/note/read/${id}`);
  }
  insert(data: Note): Observable<any> {
    return this.http.post("http://localhost:8080/note/create", data);
  }
  updateNote(id: number|undefined, Note:Note): Observable<any>{
    return this.http.put(`http://localhost:8080/note/update/${id}`, Note);
  }
  deleteNote(id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/note/delete/${id}`,{ responseType: 'text' });
  }
}
