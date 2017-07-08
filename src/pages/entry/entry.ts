import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PreviousEntryPage } from '../previous-entry/previous-entry';
import { entryLog } from '../../models/entryLog';

/**
 * Generated class for the EntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {
  //historyEntry: any = [];
  entry : entryLog;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
    
    }

  newEntry(form) {
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    } 
    //entry : any = JSON.parse(window.localStorage.getItem("entry")) || [];
    //entry.push(this.historyEntry);
    //window.localStorage.setItem("entry", JSON.stringify(entry));
    this.navCtrl.setRoot(PreviousEntryPage, {
      "entry": this.entry
    });
  }
}


