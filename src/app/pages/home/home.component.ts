import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import dayjs from 'dayjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly age = signal('0');

  ngOnInit(): void {
    const update = () => {
      const years = dayjs().diff(dayjs('2000-01-01'), 'second') / (60 * 60 * 24 * 365.25);
      this.age.set(years.toFixed(9));
    };
    update();
    const id = setInterval(update, 500);
    this.destroyRef.onDestroy(() => clearInterval(id));
  }
}
