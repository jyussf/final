import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

import { AppUsersProvider } from '../../providers/app-users/app-users';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any ={}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsersProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
userLogin(login){
  console.log (login);
  if(login.invalid) {
      return alert("Email or password is incorrect. Please try again.");
  } 
   this.appUsers.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, error => {
      return alert ("Oh noes. Something went wrong! Please try again.")
    });
}
}
