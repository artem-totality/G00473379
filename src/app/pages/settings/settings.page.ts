import { Component } from '@angular/core';
import { IonContent, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonContent, IonText, HeaderComponent, SettingsComponent],
})
export class SettingsPage {
  constructor() {}

  ngOnInit() {}
}
