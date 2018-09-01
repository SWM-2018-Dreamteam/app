import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PerfilPage } from "../perfil/perfil";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  goToPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }
}
