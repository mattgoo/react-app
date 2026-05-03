import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @Output() completed = new EventEmitter<void>();

  protected readonly bootLine1 = '> BOOT_OK'.split('');
  protected readonly bootLine2 = '> LOAD_PORTFOLIO'.split('');
  protected readonly titleChars = 'MATT GOODWIN'.split('');

  @ViewChild('cursor') cursor!: ElementRef<HTMLElement>;
  @ViewChild('line1') line1!: ElementRef<HTMLElement>;
  @ViewChild('line2') line2!: ElementRef<HTMLElement>;
  @ViewChild('title') title!: ElementRef<HTMLElement>;
  @ViewChild('scanSweep') scanSweep!: ElementRef<HTMLElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLElement>;

  private timeline?: gsap.core.Timeline;
  private scanLoop?: gsap.core.Tween;
  private finished = false;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.finish();
      return;
    }

    const line1Chars = this.line1.nativeElement.querySelectorAll<HTMLElement>('.char');
    const line2Chars = this.line2.nativeElement.querySelectorAll<HTMLElement>('.char');
    const titleChars = this.title.nativeElement.querySelectorAll<HTMLElement>('.char');

    // Continuous CRT scan sweep — runs the whole time the overlay is up.
    this.scanLoop = gsap.fromTo(
      this.scanSweep.nativeElement,
      { yPercent: -100, opacity: 0.7 },
      { yPercent: 200, duration: 2.4, ease: 'none', repeat: -1 },
    );

    const tl = gsap.timeline({ onComplete: () => this.finish() });

    // 0.0–0.3 cursor blink
    tl.set([line1Chars, line2Chars, titleChars], { opacity: 0 });
    tl.set(this.title.nativeElement, { scale: 0.5 });
    tl.fromTo(
      this.cursor.nativeElement,
      { opacity: 0 },
      { opacity: 1, duration: 0.08, repeat: 5, yoyo: true, ease: 'steps(1)' },
    );

    // 0.3–0.7 boot line 1 types in
    tl.to(line1Chars, { opacity: 1, duration: 0.04, stagger: 0.04, ease: 'none' }, '+=0.05');

    // 0.7–1.2 boot line 2 types in
    tl.to(line2Chars, { opacity: 1, duration: 0.04, stagger: 0.04, ease: 'none' }, '+=0.1');

    // 1.2–1.7 title scales in with flicker
    tl.to(
      this.title.nativeElement,
      { scale: 1, duration: 0.5, ease: 'back.out(2)' },
      '+=0.2',
    );
    tl.to(titleChars, { opacity: 1, duration: 0.05, stagger: 0.02 }, '<');
    tl.to(this.title.nativeElement, {
      opacity: 0.3,
      duration: 0.05,
      yoyo: true,
      repeat: 3,
      ease: 'steps(1)',
    });

    // 1.9–2.3 fade out
    tl.to(this.overlay.nativeElement, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.2');

    this.timeline = tl;
  }

  @HostListener('click')
  skip(): void {
    if (this.finished) return;
    this.timeline?.kill();
    gsap.to(this.overlay.nativeElement, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.in',
      onComplete: () => this.finish(),
    });
  }

  private finish(): void {
    if (this.finished) return;
    this.finished = true;
    this.scanLoop?.kill();
    this.completed.emit();
  }

  ngOnDestroy(): void {
    this.timeline?.kill();
    this.scanLoop?.kill();
  }
}
