import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  games = [
    { name: 'Black Desert Online', image: 'assets/images/jeux/bdo.jpg' },
    { name: 'Once Human', image: 'assets/images/jeux/once-human.jpg' },
    { name: 'Minecraft', image: 'assets/images/jeux/minecraft.jpg' },
    { name: 'League of Legends', image: 'assets/images/jeux/lol.jpg' },
    { name: 'Pokémon Pocket', image: 'assets/images/jeux/pokemon-pocket.jpg' },
    { name: 'Palworld', image: 'assets/images/jeux/palworld.jpg' },
    { name: 'Rust', image: 'assets/images/jeux/rust.jpg' },
    { name: 'No Man\'s Sky', image: 'assets/images/jeux/nms.jpg' },
    { name: 'Valorant', image: 'assets/images/jeux/valorant.jpg' },
    { name: 'Farming Simulator 25', image: 'assets/images/jeux/fs25.jpg' },
    { name: 'War Thunder', image: 'assets/images/jeux/war-thunder.jpg' },
    { name: 'World of Warships', image: 'assets/images/jeux/wows.jpg' },
    { name: 'Dofus', image: 'assets/images/jeux/dofus.jpg' },
    { name: 'Project Zomboid', image: 'assets/images/jeux/project-zomboid.jpg' },
    { name: 'Return to Moria', image: 'assets/images/jeux/moria.jpg' },
    { name: 'TFT', image: 'assets/images/jeux/tft.jpg' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };
}
