import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonButton, IonInput, IonItem, FormsModule],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  constructor() {}

  ngOnInit() {}
}
