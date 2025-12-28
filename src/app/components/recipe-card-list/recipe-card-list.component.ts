import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
  imports: [RecipeCardComponent],
})
export class RecipeCardListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
