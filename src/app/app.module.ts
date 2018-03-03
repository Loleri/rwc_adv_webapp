import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { Component } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from './environment';

@NgModule({
  imports:[ 
      BrowserModule, 
      AngularFireModule.initializeApp(environment.firebase ),
      AngularFireDatabaseModule,
      FormsModule,
      ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
