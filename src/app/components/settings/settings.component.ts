import { Component, OnInit } from '@angular/core';
import { IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [IonRadio, IonRadioGroup],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
