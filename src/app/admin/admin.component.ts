import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
// import { database, initializeApp } from 'firebase';
// import { firebaseConfig } from '../../environments/firebase.config';

//inject service
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  messages: FirebaseListObservable<any>;
  messageObj:any;
  myvoice:string; whoami:string; timeofPost:Date; status:boolean;

  constructor(
    private af: AngularFire,
    private _msgService:MessageService) {}

  ngOnInit() {
    this.messages = this._msgService.getMessageList();
  }

  loadFilteredMessageobject() {
    //using service
    this._msgService.getFilteredMessageObject();
    // var root = database().ref("messages");
    //  root.on('value', function (snap) {
    //    console.log(snap.val());
    //     var _result = [];
    //     snap.forEach((childSnap) => {
    //       var _element = childSnap.val();
    //       _element.id = childSnap.key;
    //       _result.push(_element);
    //     });
    //     this.messageObj = _result;
    //   });

  }

  addMessage(event){
    //using methods
    var newMessage = {
        myVoice: this.myvoice,
        whoAmI: this.whoami,
        timeOfPost: new Date().toUTCString(),
        status: false
    }
    // this.messages.push(newMessage);

    //using service
    this._msgService.addMessage(newMessage);
    //reset the form
    this.resetForm();
  }

  updateMessage(model){
    this.messages.update(model.key,model);
  }

  removeMessage(model){
    //using method
    //this.messages.remove(model);

    //using service
    this._msgService.removeMessage(model);
  }

  resetForm(){
    this.myvoice = '';
    this.whoami = '';  
  }

}
