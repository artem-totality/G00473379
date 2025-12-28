import { Component, Input, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
  imports: [RecipeCardComponent],
})
export class RecipeCardListComponent implements OnInit {
  @Input()
  recipeList!: RecipeModel[];

  constructor() {}
  ngOnInit() {}
}
