import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams) {
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
