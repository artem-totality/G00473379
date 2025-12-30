import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { SearchRecipesService } from 'src/app/services/search-recipes-service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonButton, IonInput, IonItem, FormsModule],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  constructor(private searchRecipesService: SearchRecipesService) {}

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
}
