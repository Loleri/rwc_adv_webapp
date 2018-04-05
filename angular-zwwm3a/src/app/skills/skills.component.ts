import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skills : Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.skills = db.list('/student/skills').valueChanges();
  }
  ngOnInit() {
  }

}