import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { ModalController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';


@IonicPage()
@Component({
  selector: 'page-usercenter',
  templateUrl: 'usercenter.html'
})
export class UsercenterPage {
   myimg:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public modalCtrl: ModalController) {
      this.myimg="";
      this.storage.get("login").then((value)=>{
          if(value=="true"){//登录状态
              this.storage.get("USER_INFO").then((data)=>{
                  console.log(JSON.parse(data).username);
                   this.myimg='../assets/imgs/bg'+JSON.parse(data).username+'.jpg';
              });
              console.log(value);
          }else{//跳回登录页面
              console.log(value);
              let modal = this.modalCtrl.create(ContactPage);
              modal.onDidDismiss(data=>{
                  this.myimg='../assets/imgs/bg'+data+'.jpg';
              });
              modal.present();
          }
      });

  }

    logout(){
        //注销
        this.storage.set("login","");
        this.storage.remove("login");
        //跳出登录页面
        let modal = this.modalCtrl.create(ContactPage);
        modal.onDidDismiss(data=>{
            this.myimg='../assets/imgs/bg'+data+'.jpg';
        });
        modal.present();
    }

}
