import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {


@ViewChild("email") email;
@ViewChild("username") username;
@ViewChild("mobile") mobile;
@ViewChild("password") password;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private http: Http,  public loading: LoadingController) {

  }

  Register(){
 //// check to confirm the username, email, telephone and password fields are filled

  if(this.username.value=="" ){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Username field is empty",
 buttons: ['OK']
 });

 alert.present();
  } else
 if(this.email.value==""){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Email field is empty",
 buttons: ['OK']
 });

 alert.present();
      
}
 else 
  if(this.mobile.value=="" ){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Mobile number field is empty",
 buttons: ['OK']
 });

 alert.present();
  } else
 if(this.password.value==""){

 let alert = this.alertCtrl.create({

 title:"ATTENTION",
 subTitle:"Password field is empty",
 buttons: ['OK']
 });

 alert.present();
      
}
 else 
 {


var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

  let data = {
        username: this.username.value,
        password: this.password.value,
        mobile: this.mobile.value,
        email: this.email.value      
      };


 let loader = this.loading.create({
    content: 'Processing please wait...',
  });

 loader.present().then(() => {
this.http.post('http://ionicphp.test/register.php',data, options)
.map(res => res.json())
.subscribe(res => {

 loader.dismiss()
if(res=="Registration successfull"){
  let alert = this.alertCtrl.create({
    title:"CONGRATS",
    subTitle:(res),
    buttons: ['OK']
    });
   
    alert.present();
 this.navCtrl.push(HomePage);

}else
{
 let alert = this.alertCtrl.create({
 title:"ERROR",
 subTitle:(res),
 buttons: ['OK']
 });

 alert.present();
  } 
});
});
 }

}
}
 