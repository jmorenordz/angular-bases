import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizeName(): string {

    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return ` Heroe: ${this.name}- Edad: ${this.age}`;

  }

  changeName(): void {
    if(this.name == 'Spiderman') {

      this.name = 'Ironman';

  }else{
    this.name = 'Spiderman';
  }
}

  changeAge(): void {
    if(this.age == 60) {

    this.age =45;
  }else{
    this.age =60;
  }

  }

}
