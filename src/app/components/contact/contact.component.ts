import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  socialLinks = [
    { name: "Discord", icon: "assets/images/social/discord2.png", url: "https://discord.gg/NpFWqFpH" },
    { name: "Twitch", icon: "assets/images/social/twitch.png", url: "https://www.twitch.tv/pax_community" },
    { name: "Twitter", icon: "assets/images/social/x.png", url: "https://twitter.com/votre-compte" },
    { name: "YouTube", icon: "assets/images/social/youtube2.png", url: "https://youtube.com/votre-chaîne" }
  ];
}
