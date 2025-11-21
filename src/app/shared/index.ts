import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

export const STANDARD = [CommonModule, DatePipe, DecimalPipe];

const SHARED_MODULES = [
  ...STANDARD,
  RouterOutlet,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  AngularSvgIconModule,
];

export default SHARED_MODULES;
