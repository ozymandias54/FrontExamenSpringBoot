import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NoteListeComponent } from './pages/note-liste/note-liste.component';
import { NoteAddComponent } from './pages/note-add/note-add.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'notes',component:NoteListeComponent},
  {path:'addnote',component:NoteAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
