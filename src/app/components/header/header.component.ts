import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { optionsOutline, heart } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, IonButtons],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
    addIcons({ heart, optionsOutline });
  }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }

  goFavorite() {
    this.router.navigate(['/favorite']);
  }

  goSettings() {
    this.router.navigate(['/settings']);
  }
}
