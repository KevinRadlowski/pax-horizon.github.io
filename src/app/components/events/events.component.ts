import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  monthlyEvents = [
    { title: "Tournoi ARAM LoL", description: "Tournoi mensuel avec cashprize." },
    { title: "Concours Passion", description: "Tirage au sort pour les membres." },
    { title: "Podcast mensuel", description: "Discussions autour de l'asso et de l'actu gaming." }
  ];

  charityEvents = [
    { title: "Stream pour la cause (Juin)", description: "Marathon caritatif avec streamers." },
    { title: "Appel aux dons (Décembre)", description: "Collecte de dons pour une cause importante." }
  ];

  lanTournaments = [
    { title: "Concours LAN Caritatif", description: "Tournoi sur CIV6, AOE, Anno, Total Warhammer.", frequency: "4 fois par an" }
  ];

  specialDraws = [
    { title: "Tirage de Pâques (1er avril)", description: "Cadeau d'une valeur de 45€." },
    { title: "Tirage de Noël (20 décembre)", description: "Cadeau d'une valeur de 45€." }
  ];

  streamSchedule = [
    { day: "Mardi & Vendredi", time: "15h - 18h" },
    { day: "Jeudi & Samedi", time: "18h - 20h" }
  ];
}
