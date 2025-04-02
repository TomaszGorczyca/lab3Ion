import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonBackButton, IonList, IonItem, IonLabel, IonRadio, IonButtons, IonRadioGroup } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonButtons, IonRadio, IonLabel, IonItem, IonList, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage implements OnInit {
  constructor(private storage:Storage) { 

  }

  async onButtonClick(){
    console.log(this.status);
    await this.storage.create();
    await this.storage.set('status',this.status);
  }
  status:string="";
async ionViewWillEnter(){
console.log("ionviewWillEnter");
await this.storage.create();
this.status=await this.storage.get('status');
}

  
  ngOnInit() {
  }

}
