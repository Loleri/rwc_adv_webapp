import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies : Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.hobbies = db.list('/student/images').valueChanges();
  }
  ngOnInit() {
  }

}