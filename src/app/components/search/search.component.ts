import { Component, OnInit } from '@angular/core';
import {
  IonInput,
  IonIcon,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { SearchRecipesService } from 'src/app/services/search-recipes-service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonButton, IonIcon, IonInput, IonItem, FormsModule],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  constructor(private searchRecipesService: SearchRecipesService) {
    addIcons({ closeCircleOutline });
  }

  searchRecipes() {
    const ingredients = this.searchQuery
      .split(',')
      .map((i) => i.trim())
      .filter((i) => i);

    if (!ingredients.length) {
      this.searchQuery = '';
      return;
    }

    this.searchRecipesService.loadRecieptsByIngredients(ingredients);
  }

  ngOnInit() {}

  clearSearch() {
    this.searchQuery = '';
    this.searchRecipesService.clearRecipes();
  }
}
