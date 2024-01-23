import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  getEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>("http://localhost:8080/etudiant/read");
  }
  getEtudiant(id:number|undefined): Observable<Etudiant>{
    return this.http.get<Etudiant>(`http://localhost:8080/etudiant/read/${id}`);
  }
  insert(data: Etudiant): Observable<any> {
    return this.http.post("http://localhost:8080/etudiant/create", data);
  }
  updateEtudiant(id: number, Etudiant:Etudiant): Observable<any>{
    return this.http.put(`http://localhost:8080/etudiant/update/${id}`, Etudiant);
  }
  deleteEtudiant(id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/etudiant/delete/${id}`,{ responseType: 'text' });
  }
}
