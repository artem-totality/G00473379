import { Component, OnInit, Input } from '@angular/core';
import { Measure, Ingredient } from 'src/app/models/recipe-details.model';
import { INGREDIENT_IMAGES_PATH } from 'src/app/common/constants/constants';
import { SettingsService } from 'src/app/services/settings-service';
import { Observable } from 'rxjs';
import { MeasuresSetting } from 'src/app/common/enums/app.enum';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  imports: [AsyncPipe],
})
export class IngredientComponent implements OnInit {
  image!: string;
  measuresSetting$!: Observable<MeasuresSetting>;

  @Input()
  ingredient!: Ingredient;

  constructor(private settingsService: SettingsService) {
    this.measuresSetting$ = this.settingsService.measuresSetting$;
  }

  ngOnInit() {
    this.image = `${INGREDIENT_IMAGES_PATH}/${this.ingredient.image}`;
  }

  getMeasure(setting: MeasuresSetting): Measure {
    return setting === MeasuresSetting.US
      ? this.ingredient.measures.us
      : this.ingredient.measures.metric;
  }
}
