import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent {

  public heroes: string[] = ['Spider-man', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  public removeLast(): void {
    this.deletedHero = this.heroes.pop();
  }
}
