import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { ConsentComponent } from './consent/consent.component';
import { ConsentListComponent } from './consent-list/consent-list.component';


let config = {
  apiKey: 'AIzaSyDMzzDI25r1JBwbRgjO9RCvuvwS5rDUZTU',
  authDomain: 'newtown-story.firebaseapp.com',
  databaseURL: 'https://newtown-story.firebaseio.com',
  storageBucket: 'newtown-story.appspot.com',
  messagingSenderId: '915123734153'
};

@NgModule({
  declarations: [
    AppComponent,
    ConsentComponent,
    ConsentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
