import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { RecipeModel } from 'src/app/models/recipe.model';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { StorageService } from 'src/app/services/storage-service';
import { FAVORITE_STORAGE_KEY } from 'src/app/common/constants/constants';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  imports: [IonButton, IonIcon],
})
export class RecipeCardComponent implements OnInit {
  favoriteRecipes: RecipeModel[] = [];
  favoriteRecipesId: number[] = [];

  @Input()
  recipe!: RecipeModel;
  constructor(private storageService: StorageService) {
    addIcons({ heart });
  }

  ngOnInit() {
    const storageData =
      this.storageService.getItem(FAVORITE_STORAGE_KEY) ?? '[]';
    const parsedData = JSON.parse(storageData);
    this.favoriteRecipes = Array.isArray(parsedData) ? parsedData : [];
    this.favoriteRecipesId = this.favoriteRecipes.map((recipe) => recipe.id);
  }

  toggleFavorite() {
    if (this.favoriteRecipesId.includes(this.recipe.id)) {
      this.favoriteRecipes = this.favoriteRecipes.filter(
        (recipe) => recipe.id !== this.recipe.id
      );
    } else {
      this.favoriteRecipes.push(this.recipe);
    }

    this.favoriteRecipesId = this.favoriteRecipes.map((recipe) => recipe.id);
    this.storageService.setItem(
      FAVORITE_STORAGE_KEY,
      JSON.stringify(this.favoriteRecipes)
    );
  }
}
