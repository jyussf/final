import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

import { AppUsersProvider } from '../../providers/app-users/app-users';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user : any ={}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers : AppUsersProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

signupForm(form){
  if(form.invalid) {
      return alert("Please fill in all of the required fields.");
  }
  this.appUsers.register(this.user)
  .map(res => res.json())
      .subscribe(res => {
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem('userId', res.id);
        this.navCtrl.push(LobbyPage);
        // handle successful responses and decide what happens next
      }, error => {
        // inform the user of any known problems that arose, otherwise give a generic
        // failed message
        return alert ("Oh noes. Something went wrong! Please try again.")
      });
  
  }
}
