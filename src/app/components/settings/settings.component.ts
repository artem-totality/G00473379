import { Component, OnInit } from '@angular/core';
import { IonRadio, IonRadioGroup, IonText } from '@ionic/angular/standalone';
import { MeasuresSetting } from 'src/app/common/enums/app.enum';
import { SettingsService } from 'src/app/services/settings-service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [IonRadio, IonRadioGroup, IonText],
})
export class SettingsComponent implements OnInit {
  selectedMeasure = MeasuresSetting.US;

  constructor(private settingService: SettingsService) {}

  ngOnInit() {
    this.selectedMeasure = this.settingService.getMeasuresSettingSnapshot();
  }

  onMeasureChange(event: any) {
    this.selectedMeasure = event.detail.value;

    if (event.detail.value === MeasuresSetting.METRIC) {
      this.settingService.setMeasuresSetting(MeasuresSetting.METRIC);
    } else {
      this.settingService.setMeasuresSetting(MeasuresSetting.US);
    }
  }
}
