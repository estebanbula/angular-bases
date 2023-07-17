import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from "./pages/main-page.component";
import {CharactersListComponent} from './components/characters-list/characters-list.component';
import {AddCharacterComponent} from './components/add-character/add-character.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
