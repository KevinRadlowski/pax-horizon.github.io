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
    { name: "Twitch", icon: "assets/images/social/twitch.png", url: "https://www.twitch.tv/pax_horizon" },
    { name: "BlueSky", icon: "assets/images/social/bluesky.svg", url: "https://bsky.app/profile/pax-community.bsky.social" },
    { name: "Instagram", icon: "assets/images/social/instagram.png", url: "https://www.instagram.com/pax_community?igsh=N3M2cTExNnBibHk5" }
  ];
}
