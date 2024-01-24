import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NoteListeComponent } from './pages/note-liste/note-liste.component';
import { NoteAddComponent } from './pages/note-add/note-add.component';
import { NoteEditeComponent } from './pages/note-edite/note-edite.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'notes',component:NoteListeComponent},
  {path:'addnote',component:NoteAddComponent},
  {path:'update/:id',component:NoteEditeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
