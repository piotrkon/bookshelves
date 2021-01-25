import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBgvGKZHoN90OUxFY0jSOltt3EeiRAbS1k",
      authDomain: "bookshelves-ce92c.firebaseapp.com",
      projectId: "bookshelves-ce92c",
      storageBucket: "bookshelves-ce92c.appspot.com",
      messagingSenderId: "643876164176",
      appId: "1:643876164176:web:b8c8d744871577301af755",
      measurementId: "G-WY68BZDJWV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
