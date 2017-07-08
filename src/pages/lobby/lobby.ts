import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EntryPage } from '../entry/entry';
import { PreviousEntryPage } from '../previous-entry/previous-entry';
/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
makeEntry(){
  this.navCtrl.push(EntryPage);
}

viewEntry(){
  this.navCtrl.push(PreviousEntryPage);
}

}
