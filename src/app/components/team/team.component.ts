import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers = [
    { name: "Zhu DonDon", role: "Président", image: "assets/images/grades/Président.png" },
    { name: "Wiiwi", role: "Vice-Président", image: "assets/images/grades/vice-président.png" },
    { name: "LeMaudit", role: "Coordinateur", image: "assets/images/grades/Coordinateur2.png" },
    { name: "Labraas", role: "Coordinateur", image: "assets/images/grades/Coordinateur2.png" },
    { name: "Fiat500", role: "Trésorière", image: "assets/images/grades/tresorier.png" },
    { name: "Paniha", role: "Secrétaire", image: "assets/images/grades/Secrétaire.png" },
    { name: "Detzer", role: "Modérateur", image: "assets/images/grades/moderateur.png" },
    { name: "ForceBook", role: "Modérateur", image: "assets/images/grades/moderateur.png" },
    { name: "Maiden", role: "Modérateur", image: "assets/images/grades/moderateur.png" },
    { name: "Mummix", role: "Modérateur", image: "assets/images/grades/moderateur.png" },
    { name: "Splinter", role: "Modérateur", image: "assets/images/grades/moderateur.png" },
    { name: "Tsuna77", role: "Modérateur", image: "assets/images/grades/moderateur.png" },
  ];
}
