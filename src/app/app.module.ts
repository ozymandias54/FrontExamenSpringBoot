import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './composant/sidebar/sidebar.component';
import { NoteListeComponent } from './pages/note-liste/note-liste.component';
import { NoteAddComponent } from './pages/note-add/note-add.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteEditeComponent } from './pages/note-edite/note-edite.component';
import { FormsModule } from '@angular/forms';
import { InputItemeComponent } from './composant/input-iteme/input-iteme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NoteListeComponent,
    NoteAddComponent,
    NoteEditeComponent,
    InputItemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
