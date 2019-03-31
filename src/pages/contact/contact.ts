import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UsercenterPage } from '../usercenter/usercenter';
import { AboutPage } from '../about/about';
import { ToastController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { ViewController } from 'ionic-angular';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public storage: Storage,
              public viewCtrl: ViewController) {


  }

  login(username: HTMLInputElement, password: HTMLInputElement){
    if(username.value.length===0){
      let toast = this.toastCtrl.create({
        message: '用户名不能为空',
        duration: 3000
      });
      toast.present();
    }else if(password.value.length===0){
      let toast = this.toastCtrl.create({
        message: '密码不能为空',
        duration: 3000
      });
      toast.present();
    }else{
      //创建loading窗口，模拟3秒后登录成功，loading消失
      let loader = this.loadingCtrl.create({
        content: "正在登陆...",
        spinner: 'crescent',
        duration: 500
      });
      loader.present();
      // 储存用户信息
      let data = {username: username.value, password: password.value};
      this.storage.remove("USER_INFO");
      this.storage.set("USER_INFO", JSON.stringify(data));
      this.storage.set("login","true");
      // 界面跳转
      /*let modal = this.modalCtrl.create(UsercenterPage, data);
      modal.present();*/
      //关闭当前页面（把当前用户名传过去）,这是弹出页面
      this.viewCtrl.dismiss(username.value);
    }


  }
  register(){
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }



}
