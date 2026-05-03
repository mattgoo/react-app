import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  faBrandGithub,
  faBrandJava,
  faBrandJs,
  faBrandLinux,
  faBrandNodeJs,
  faBrandPython,
  faBrandReact,
  faBrandWindows,
} from '@ng-icons/font-awesome/brands';
import { faSolidHouse } from '@ng-icons/font-awesome/solid';
import {
  simpleAdobe,
  simpleDjango,
  simpleJavascript,
  simpleKalilinux,
  simpleMysql,
  simpleTryhackme,
} from '@ng-icons/simple-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgIcon],
  viewProviders: [
    provideIcons({
      faSolidHouse,
      faBrandPython,
      faBrandJava,
      faBrandLinux,
      faBrandWindows,
      faBrandGithub,
      faBrandReact,
      faBrandNodeJs,
      faBrandJs,
      simpleTryhackme,
      simpleKalilinux,
      simpleMysql,
      simpleDjango,
      simpleAdobe,
      simpleJavascript,
    }),
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private readonly router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener');
  }
}
