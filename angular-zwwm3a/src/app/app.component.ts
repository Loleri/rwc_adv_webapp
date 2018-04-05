import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  //template:`<ul>
  //  <li *ngFor="let fruit of fruits | async">
  //    {{ fruit }}
  //  </li> 
  //  </ul> `
})
export class AppComponent  {
  name = 'Angular 5';
  fruit : Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.fruit = db.list('/').valueChanges();
  }
}

/*
export class AppComponent {
     
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('fruit');
    var items = this.itemsCollection.valueChanges()
      .map(items => {
        console.log(items);
        return items;
      })
    this.items = items;
  }
}
*/