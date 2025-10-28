import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

const SHARED_MODULES = [
  CommonModule,
  RouterOutlet,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  AngularSvgIconModule,
];

export default SHARED_MODULES;
