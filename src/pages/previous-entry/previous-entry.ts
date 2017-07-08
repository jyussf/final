import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SummaryPage } from '../summary/summary';

/**
 * Generated class for the PreviousEntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-previous-entry',
  templateUrl: 'previous-entry.html',
})
export class PreviousEntryPage {
  entry: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousEntryPage');
    //this.entry = JSON.parse(window.localStorage.getItem("entry")) || [];
    this.entry = this.navParams.get("entry");
    console.log(this.entry)
  }

goToSummary(){
  this.navCtrl.push(SummaryPage);
}
}


