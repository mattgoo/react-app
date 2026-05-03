import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
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
import { HoverScaleDirective } from '../../shared/hover-scale.directive';
import { revealOnEnter } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgIcon, HoverScaleDirective],
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
export class AboutComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  goHome(): void {
    this.router.navigate(['/']);
  }

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const heading = root.querySelector<HTMLElement>('.aboutText');
    const infoBlocks = root.querySelectorAll<HTMLElement>('.info-grid > .info-text');
    const icons = root.querySelectorAll<HTMLElement>('.icon');
    const tryhackme = root.querySelector<HTMLElement>('.link-text');

    if (heading) revealOnEnter(heading, { y: 20, duration: 0.5 });
    revealOnEnter(Array.from(infoBlocks), { y: 30, stagger: 0.1, duration: 0.6, delay: 0.15 });
    revealOnEnter(Array.from(icons), { y: 20, stagger: 0.04, duration: 0.4, delay: 0.4 });
    if (tryhackme) revealOnEnter(tryhackme, { y: 20, duration: 0.5, delay: 0.9 });
  }
}
