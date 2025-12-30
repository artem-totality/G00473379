import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';
import {
  Ingredient,
  RecipeDetailsModel,
} from 'src/app/models/recipe-details.model';
import { IngredientComponent } from './ingredient/ingredient.component';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  imports: [IonText, IngredientComponent],
})
export class RecipeDetailsComponent implements OnInit {
  ingredients: Ingredient[] = [];

  @Input()
  recipeDetails!: RecipeDetailsModel;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['recipeDetails'] && this.recipeDetails) {
      this.ingredients = this.recipeDetails.extendedIngredients ?? [];
    }
  }
}
