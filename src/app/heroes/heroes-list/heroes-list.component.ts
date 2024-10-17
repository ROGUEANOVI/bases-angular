import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  heroesList: string[] = ["superman", "iroman", "spiderman"];

  heroDeleted?: string;

  deleteLastHero() {
    this.heroDeleted = this.heroesList.pop();
  }
}
