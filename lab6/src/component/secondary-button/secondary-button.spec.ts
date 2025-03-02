import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
  @Input() link!: string;
  @Input() linkLabel!: string;
}