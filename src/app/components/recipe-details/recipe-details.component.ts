import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import {
  Ingredient,
  InstructionStep,
  RecipeDetailsModel,
} from 'src/app/models/recipe-details.model';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { RecipeModel } from 'src/app/models/recipe.model';
import { FavoriteService } from 'src/app/services/favorite-service';
import { IngredientComponent } from './ingredient/ingredient.component';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  imports: [IonText, IonButton, IonIcon, IngredientComponent],
})
export class RecipeDetailsComponent implements OnInit {
  ingredients: Ingredient[] = [];
  steps: InstructionStep[] = [];
  id: number = 0;

  @Input()
  recipeDetails!: RecipeDetailsModel;
  @Input()
  favoriteRecipes!: RecipeModel[];

  constructor(private favoriteService: FavoriteService) {
    addIcons({ heart });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['recipeDetails'] && this.recipeDetails) {
      this.ingredients = this.recipeDetails.extendedIngredients ?? [];
      this.id = this.recipeDetails.id;
      const [instruction] = this.recipeDetails.analyzedInstructions;
      if (instruction) {
        this.steps = instruction.steps;
      }
    }
  }

  toggleFavorite() {
    if (this.isFavorite(this.recipeDetails.id)) {
      this.favoriteRecipes = this.favoriteRecipes.filter(
        (recipe) => recipe.id !== this.recipeDetails.id
      );
    } else {
      this.favoriteRecipes.push(this.recipeDetails);
    }

    this.favoriteService.setFavorites(this.favoriteRecipes);
  }

  isFavorite(id: number): boolean {
    return this.favoriteRecipes.map((r) => r.id).includes(id);
  }
}
