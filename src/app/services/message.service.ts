import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//inject firebase
import { database, initializeApp } from 'firebase';
import { firebaseConfig } from '../../environments/firebase.config';
import { FirebaseListObservable,AngularFire } from 'angularfire2';

@Injectable()
export class MessageService {
  
  items: FirebaseListObservable<any>;
  filteredItem: any;

  constructor(private _http: Http, private af: AngularFire) {
    this.items = af.database.list("messages");
    console.log('services started...')
  }

  getMessageList(){
    return this.af.database.list('messages');
  }

  getFilteredMessageObject(){
    // var root = database().ref("messages");
    // root.on('value',function(snap){
    //   var _result=[];
    //   snap.forEach((childSnap:any) => {
    //     var _element = childSnap.val();
    //     _element.id = childSnap.key;
    //     _result.push(_element);
    //   });
    //   this.filteredItem = _result;
    // });

    // return this.filteredItem;
  }

  addMessage(model){

    return this.items.push(model);
  }

  removeMessage(model){
    this.items.remove(model);
  }

}
