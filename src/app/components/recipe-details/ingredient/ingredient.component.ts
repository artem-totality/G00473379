import { Component, OnInit, Input } from '@angular/core';
import { Measure, Ingredient } from 'src/app/models/recipe-details.model';
import { INGREDIENT_IMAGES_PATH } from 'src/app/common/constants/constants';

@Component({
  selector: 'ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  measure!: Measure;
  image!: string;

  @Input()
  ingredient!: Ingredient;

  constructor() {}

  ngOnInit() {
    this.image = `${INGREDIENT_IMAGES_PATH}/${this.ingredient.image}`;
    this.measure = this.ingredient.measures.metric;
  }
}
