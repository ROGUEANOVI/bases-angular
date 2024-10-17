import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  hero: string = 'thor';
  poder: string = 'fuerza';

  changeHero() {
    this.hero = 'spiderman';
  }

  changePoder() {
    this.poder = 'velocidad';
  }

  reset() {
    if (this.hero !== 'thor') {
      this.hero = 'thor';
    }
    if (this.poder !== 'fuerza') {
      this.poder = 'fuerza';
    }
  }
}
