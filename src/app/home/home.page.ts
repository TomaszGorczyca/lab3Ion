import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonBackButton, IonList, IonRadio, IonItem, IonLabel, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons, IonLabel, IonItem, IonRadio, IonList, IonBackButton, RouterLink ,IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  myStatus:string= "";
  constructor(private storage:Storage) {}


  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus= await this.storage.get('status');
  }
}
