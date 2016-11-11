import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { database, initializeApp } from 'firebase';
import { firebaseConfig } from '../../environments/firebase.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: FirebaseListObservable<any>;
  messageObj:any;
  myvoice:string; whoami:string; timeofPost:Date; status:boolean;

  constructor(private af: AngularFire) {
    this.messages = this.af.database.list('messages');
  }

  ngOnInit() {
    //this.loadAllMessageArrayObject();

    //this.loadFilteredMessageobject();
  }

  loadAllMessageArrayObject() {
    this.messages = this.af.database.list('messages');
  }

  loadFilteredMessageobject() {

    var root = database().ref("messages");
     root.on('value', function (snap) {
       console.log(snap.val());
        // var _result = [];
        // snap.forEach((childSnap) => {
        //   var _element = childSnap.val();
        //   _element.id = childSnap.key;
        //   _result.push(_element);
        // });
        // this.messageObj = _result;
      });

  }

  addMessage(event){
    // this.messages = this.af.database.list('messages');
    var newMessage = {
        myVoice: this.myvoice,
        whoAmI: this.whoami,
        timeOfPost: new Date().toUTCString(),
        status: false
    }
    this.messages.push(newMessage);
    this.resetForm();
  }

  updateMessage(model){
    this.messages.update(model.key,model);
  }

  removeMessage(model){
    this.messages.remove(model);
  }

  resetForm(){
    this.myvoice = '';
    this.whoami = '';  
  }
}
