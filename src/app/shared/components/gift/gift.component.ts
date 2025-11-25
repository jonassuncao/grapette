import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  imports: [SHARED_MODULES, CarouselModule, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftComponent {
  public list1 = signal([
    {
      item: 'Conjunto de copos de vidro (6 unid.)',
      img: 'assets/gifts/gift1.webp',
      price: {
        decimal: 57,
        cents: 90,
      },
    },
    {
      item: 'Porta-retrato quadrado',
      img: 'assets/gifts/gift2.jpg',
      price: {
        decimal: 59,
        cents: 99,
      },
    },
    {
      item: 'Porta frios retangular de bambu',
      img: 'assets/gifts/gift3.jpg',
      price: {
        decimal: 69,
        cents: 99,
      },
    },
    {
      item: 'Assadeira Funda de Alumínio Antiaderente 34 cm',
      img: 'assets/gifts/gift4.jpg',
      price: {
        decimal: 78,
        cents: 57,
      },
    },
    {
      item: 'Kit 3 Panos de Prato',
      img: 'assets/gifts/gift5.webp',
      price: {
        decimal: 79,
        cents: 90,
      },
    },
    {
      item: 'Conjunto de copos de vidro (6 unid.)',
      img: 'assets/gifts/gift1.webp',
      price: {
        decimal: 57,
        cents: 90,
      },
    },
    {
      item: 'Porta-retrato quadrado',
      img: 'assets/gifts/gift2.jpg',
      price: {
        decimal: 59,
        cents: 99,
      },
    },
    {
      item: 'Porta frios retangular de bambu',
      img: 'assets/gifts/gift3.jpg',
      price: {
        decimal: 69,
        cents: 99,
      },
    },
    {
      item: 'Assadeira Funda de Alumínio Antiaderente 34 cm',
      img: 'assets/gifts/gift4.jpg',
      price: {
        decimal: 78,
        cents: 57,
      },
    },
    {
      item: 'Kit 3 Panos de Prato',
      img: 'assets/gifts/gift5.webp',
      price: {
        decimal: 79,
        cents: 90,
      },
    },
  ]);
  public readonly options: OwlOptions = {
    margin: 0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    items: 10,
    lazyLoad: true,
    autoplay: false,
  };
}
