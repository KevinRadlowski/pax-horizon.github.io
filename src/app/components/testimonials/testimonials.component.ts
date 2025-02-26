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
    { name: "Wiiwi", feedback: "Une asso incroyable avec une communauté active et bienveillante !" },
    { name: "LeMaudit", feedback: "Des événements bien organisés et un staff au top. Rien à redire !" },
    { name: "Maiden", feedback: "J'adore l'ambiance et la solidarité entre les membres, c'est unique." },
    { name: "LittleDonDon", feedback: "Une communauté qui sait mélanger compétition et fun, je recommande !" },
    { name: "Zhu DonDon", feedback: "Pax Horizon, c’est avant tout un état d’esprit basé sur l'entraide." }
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
}
