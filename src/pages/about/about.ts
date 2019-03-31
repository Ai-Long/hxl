import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  public contacts=[
    {"img":"bg2","name":"麦兜","text":"好嗨哦"},
    {"img":"bg3","name":"小胖","text":"好嗨哦"},
    {"img":"bg5","name":"小猪佩奇","text":"好嗨哦"},
    {"img":"bg2","name":"麦兜","text":"好嗨哦"},
    {"img":"bg3","name":"小胖","text":"好嗨哦"},
    {"img":"bg5","name":"小猪佩奇","text":"好嗨哦"},
    {"img":"bg2","name":"麦兜","text":"好嗨哦"},
    {"img":"bg3","name":"小胖","text":"好嗨哦"},
    {"img":"bg5","name":"小猪佩奇","text":"好嗨哦"}
  ];
  onClick(event,he){
    //alert(he.name);
    this.navCtrl.push('DetailPage',{test : he});
  }
  deleteItem(he){
    for(var i=0;i<this.contacts.length;i++){
      if(this.contacts[i]==he){
        this.contacts.splice(i,1);
      }
    }
  }

}
