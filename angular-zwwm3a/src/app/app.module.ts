import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { Component } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from './environment';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  imports:[ 
      BrowserModule, 
      AngularFireModule.initializeApp(environment.firebase ),
      AngularFireDatabaseModule,
      FormsModule,
      ],
  declarations: [ AppComponent, HeaderComponent, IntroComponent, SkillsComponent, EducationComponent, HobbiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }