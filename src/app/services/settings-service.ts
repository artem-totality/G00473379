import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { BehaviorSubject } from 'rxjs';
import { MEASURES_SETTING_STORAGE_KEY } from '../common/constants/constants';
import { MeasuresSetting } from '../common/enums/enums';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private measureSetting = new BehaviorSubject<MeasuresSetting>(
    MeasuresSetting.METRIC
  );

  constructor(private storage: StorageService) {
    this.loadFromStorage();
  }

  measureSetting$ = this.measureSetting.asObservable();

  private loadFromStorage() {
    const raw = this.storage.getItem(MEASURES_SETTING_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : MeasuresSetting.METRIC;
    this.measureSetting.next(data);
  }

  setFavorites(measureSetting: MeasuresSetting) {
    this.storage.setItem(
      MEASURES_SETTING_STORAGE_KEY,
      JSON.stringify(measureSetting)
    );

    this.measureSetting.next(measureSetting);
  }

  getFavoritesSnapshot(): MeasuresSetting {
    return this.measureSetting.value;
  }
}
