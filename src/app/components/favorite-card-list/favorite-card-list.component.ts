import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { FavoriteService } from 'src/app/services/favorite-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'favorite-card-list',
  templateUrl: './favorite-card-list.component.html',
  styleUrls: ['./favorite-card-list.component.scss'],
  imports: [RecipeCardComponent, CommonModule],
})
export class FavoriteCardListComponent implements OnInit {
  favoriteRecipes$!: Observable<RecipeModel[]>;

  constructor(private favoriteService: FavoriteService) {
    this.favoriteRecipes$ = this.favoriteService.favorites$;
  }

  ngOnInit() {}
}
