import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { RecipeModel } from 'src/app/models/recipe.model';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { FavoriteService } from 'src/app/services/favorite-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  imports: [IonButton, IonIcon, RouterModule],
})
export class RecipeCardComponent implements OnInit {
  favoriteRecipesId: number[] = [];

  @Input()
  recipe!: RecipeModel;
  @Input()
  favoriteRecipes!: RecipeModel[];

  constructor(private favoriteService: FavoriteService) {
    addIcons({ heart });
  }

  ngOnInit() {}

  toggleFavorite() {
    if (this.isFavorite(this.recipe.id)) {
      this.favoriteRecipes = this.favoriteRecipes.filter(
        (recipe) => recipe.id !== this.recipe.id
      );
    } else {
      this.favoriteRecipes.push(this.recipe);
    }

    this.favoriteService.setFavorites(this.favoriteRecipes);
  }

  isFavorite(id: number): boolean {
    return this.favoriteRecipes.map((r) => r.id).includes(id);
  }
}
