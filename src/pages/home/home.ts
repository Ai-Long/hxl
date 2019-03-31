import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {

  }

  ionViewDidLoad(){
    //页面加载的时候只执行一次
    console.log("home page load");
  }
  ionViewWillEnter(){
    //每次切换到这个页面的时候执行一次
    console.log("home page will enter");
  }
  myAlert(){
    let myalert=this.alertCtrl.create({});
      myalert.setTitle('项目分类列表');
      myalert.addButton('OK');
    myalert.present();
  }
  showToast(){
    let toast = this.toastCtrl.create({
      message: '用户名不能为空',
      duration: 3000
    });
    toast.present();
  }

}
