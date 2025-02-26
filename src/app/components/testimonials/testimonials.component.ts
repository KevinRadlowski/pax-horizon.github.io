import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    { name: "tomyus", date:"2024-11-29", stars: 5, title: 'La Pax Community vraiment sympa', feedback: "Une bande bande de copain qui rigole bien, tout le monde s'entend bien, no dramas débile ou autre du genre, plusieurs serveurs, plein de jeux ou tout le monde peu jouer ensemble en plaisantant, basé sur Black Desert Online, mais beaucoup d'autre games comme LOL, Once human, Minecraft, et autre (et d'autres vont arriver encore) il y a également Farming simulator etc, etc..." },
    { name: "azertosydg", date:"2024-11-01", stars: 5, title: 'Très belle communauté', feedback: "Très bon discord, avec une très bonne ambiance, plein de choses à faire dessus et partager des passions entre les membres." },
    { name: "fiat5oo", date:"2024-10-13", stars: 5, title: 'Communauté au top !', feedback: "Discord avec une belle communauté où l'on peut retrouver une belle entraide avec des joueurs de tout horizon. La bonne humeur est au rendez-vous ce qui permet de passer de bons moments ! :)" },
    { name: "paniha", date:"2024-10-13", stars: 5, title: 'Belle communauté', feedback: "On y échange sur les jeux en tous genre ou la vie de tous les jours dans le respect et la bonne humeur. J'y passe de bons moments :)" },
    { name: "zhu_dondon", date:"2024-10-12", stars: 5, title: 'Belle Communauté !', feedback: "Ils sont en train de ce monter une belle commu ! Du Jeux des Activités des passions, cela parle de tout !" },
    { name: "fabio313", date:"2024-10-12", stars: 5, title: 'La Pax', feedback: "Très bonne guilde sur Black Désert Online et très bonne communauté qui essaye de ce développé dans divers Jeux ou même sur divers loisirs IRL." },
  ];

  activeIndex = 0;

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }

  getStars(starCount: number): any[] {
    return Array(starCount).fill(0);
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  }
}
