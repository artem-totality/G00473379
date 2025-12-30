import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';
import {
  Ingredient,
  InstructionStep,
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
  steps: InstructionStep[] = [];

  @Input()
  recipeDetails!: RecipeDetailsModel;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['recipeDetails'] && this.recipeDetails) {
      this.ingredients = this.recipeDetails.extendedIngredients ?? [];
      const [instruction] = this.recipeDetails.analyzedInstructions;
      if (instruction) {
        this.steps = instruction.steps;
      }
    }
  }
}
