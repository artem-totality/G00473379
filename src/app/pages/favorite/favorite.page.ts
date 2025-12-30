import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FavoriteCardListComponent } from 'src/app/components/favorite-card-list/favorite-card-list.component';

@Component({
  selector: 'app-favorite',
  templateUrl: 'favorite.page.html',
  styleUrls: ['favorite.page.scss'],
  imports: [IonContent, FavoriteCardListComponent, HeaderComponent],
})
export class HomePage {
  constructor() {}

  ngOnInit() {}
}
