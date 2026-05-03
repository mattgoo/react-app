import { AfterViewInit, Component, DestroyRef, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { filter } from 'rxjs/operators';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly showIntro = signal(
    typeof sessionStorage !== 'undefined' && !sessionStorage.getItem('introSeen'),
  );

  @ViewChild('outletWrap') outletWrap!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationStart || e instanceof NavigationEnd))
      .subscribe((e) => {
        const el = this.outletWrap.nativeElement;
        if (e instanceof NavigationStart) {
          gsap.killTweensOf(el);
          gsap.to(el, { opacity: 0, duration: 0.18, ease: 'power1.in' });
        } else if (e instanceof NavigationEnd) {
          gsap.killTweensOf(el);
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power1.out' });
        }
      });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  protected onIntroDone(): void {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('introSeen', '1');
    }
    this.showIntro.set(false);
  }
}
