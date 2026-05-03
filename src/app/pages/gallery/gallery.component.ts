import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidHouse } from '@ng-icons/font-awesome/solid';
import { Gallery, GalleryModule, ImageItem } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { HoverScaleDirective } from '../../shared/hover-scale.directive';
import { revealOnEnter } from '../../shared/reveal';

interface GalleryPhoto {
  src: string;
  width: number;
  height: number;
}

const galleryId = 'matt-gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgIcon, GalleryModule, LightboxModule, HoverScaleDirective],
  viewProviders: [provideIcons({ faSolidHouse })],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit, AfterViewInit {
  private readonly gallery = inject(Gallery);
  private readonly lightbox = inject(Lightbox);
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly galleryId = galleryId;

  protected readonly photos: GalleryPhoto[] = [
    { src: 'assets/gallery/CourierPoster.png', width: 2, height: 3 },
    { src: 'assets/gallery/IMG_0091.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0101.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0098.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0100.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0108.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0174.PNG', width: 4, height: 3 },
    { src: 'assets/gallery/IMG_0111.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0161.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/Cover1.png', width: 1, height: 1.5 },
    { src: 'assets/gallery/IMG_0167.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0169.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0170.PNG', width: 1, height: 1 },
    { src: 'assets/gallery/IMG_0171.PNG', width: 1, height: 1.5 },
    { src: 'assets/gallery/IMG_0173.PNG', width: 1.5, height: 1 },
    { src: 'assets/gallery/IMG_0175.PNG', width: 1, height: 1.5 },
    { src: 'assets/gallery/pacman.png', width: 1, height: 1.5 },
  ];

  ngOnInit(): void {
    const ref = this.gallery.ref(this.galleryId);
    ref.load(
      this.photos.map(
        (p) => new ImageItem({ src: p.src, thumb: p.src }),
      ),
    );
  }

  ngAfterViewInit(): void {
    const tiles = this.host.nativeElement.querySelectorAll<HTMLElement>('.tile');
    revealOnEnter(Array.from(tiles), { y: 30, stagger: 0.05, duration: 0.5 });
  }

  open(index: number): void {
    this.lightbox.open(index, this.galleryId, { panelClass: 'fullscreen' });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
