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
        cents: '90',
      },
    },
    {
      item: 'Porta-retrato quadrado',
      img: 'assets/gifts/gift2.webp',
      price: {
        decimal: 59,
        cents: '99',
      },
    },
    {
      item: 'Porta frios retangular de bambu',
      img: 'assets/gifts/gift3.webp',
      price: {
        decimal: 69,
        cents: '99',
      },
    },
    {
      item: 'Assadeira Funda de Alumínio 34 cm',
      img: 'assets/gifts/gift4.webp',
      price: {
        decimal: 78,
        cents: '57',
      },
    },
    {
      item: 'Kit 3 Panos de Prato',
      img: 'assets/gifts/gift5.webp',
      price: {
        decimal: 79,
        cents: '90',
      },
    },
    {
      item: 'Varal De Roupas Dobrável',
      img: 'assets/gifts/gift6.webp',
      price: {
        decimal: 80,
        cents: '00',
      },
    },
    {
      item: 'Luva Térmica',
      img: 'assets/gifts/gift7.webp',
      price: {
        decimal: 89,
        cents: '90',
      },
    },
    {
      item: 'Ferro de Passar',
      img: 'assets/gifts/gift8.webp',
      price: {
        decimal: 89,
        cents: '90',
      },
    },
    {
      item: 'Balde Mop Giratório',
      img: 'assets/gifts/gift9.webp',
      price: {
        decimal: 95,
        cents: '15',
      },
    },
    {
      item: 'Kit Pote Hermetico 12 unidades',
      img: 'assets/gifts/gift10.webp',
      price: {
        decimal: 99,
        cents: '90',
      },
    },
    {
      item: 'Kit 2 Assadeiras Marinex',
      img: 'assets/gifts/gift11.webp',
      price: {
        decimal: 109,
        cents: '20',
      },
    },
    {
      item: 'Kit Potes de Vidro',
      img: 'assets/gifts/gift12.webp',
      price: {
        decimal: 110,
        cents: '00',
      },
    },
    {
      item: 'Chaleira Elétrica',
      img: 'assets/gifts/gift13.webp',
      price: {
        decimal: 111,
        cents: '25',
      },
    },
    {
      item: 'Sanduicheira e Grill',
      img: 'assets/gifts/gift14.webp',
      price: {
        decimal: 119,
        cents: '44',
      },
    },
    {
      item: 'Panela tipo Wok Aluminio',
      img: 'assets/gifts/gift15.webp',
      price: {
        decimal: 119,
        cents: '90',
      },
    },
    {
      item: 'Luminária de Mesa',
      img: 'assets/gifts/gift16.webp',
      price: {
        decimal: 129,
        cents: '90',
      },
    },
    {
      item: 'Torradeira',
      img: 'assets/gifts/gift17.webp',
      price: {
        decimal: 139,
        cents: '90',
      },
    },
    {
      item: 'Escada Banqueta Alumínio',
      img: 'assets/gifts/gift18.webp',
      price: {
        decimal: 139,
        cents: '90',
      },
    },
    {
      item: 'Faqueiro de Aço Inox 30 Peças',
      img: 'assets/gifts/gift19.webp',
      price: {
        decimal: 140,
        cents: '08',
      },
    },
    {
      item: 'Jarra de vidro',
      img: 'assets/gifts/gift20.webp',
      price: {
        decimal: 149,
        cents: '99',
      },
    },
    {
      item: 'Vaso de cerâmica',
      img: 'assets/gifts/gift21.webp',
      price: {
        decimal: 149,
        cents: '99',
      },
    },
    {
      item: 'Toalha de mesa quadrada',
      img: 'assets/gifts/gift22.webp',
      price: {
        decimal: 159,
        cents: '99',
      },
    },
    {
      item: 'Jogo de Assadeiras de Alumínio',
      img: 'assets/gifts/gift23.webp',
      price: {
        decimal: 166,
        cents: '00',
      },
    },
    {
      item: 'Vaporizador de Roupas Portátil',
      img: 'assets/gifts/gift24.webp',
      price: {
        decimal: 169,
        cents: '15',
      },
    },
    {
      item: 'Kit Colcha 3 Pecas QUEEN',
      img: 'assets/gifts/gift25.webp',
      price: {
        decimal: 170,
        cents: '00',
      },
    },
  ]);
  public list2 = signal([
    {
      item: 'Tábua De Passar Roupa',
      img: 'assets/gifts/gift26.webp',
      price: {
        decimal: 180,
        cents: '00',
      },
    },
    {
      item: 'Toalha de Piso (Banheiro)',
      img: 'assets/gifts/gift27.webp',
      price: {
        decimal: 199,
        cents: '90',
      },
    },
    {
      item: 'Kit de Facas 6 Peças',
      img: 'assets/gifts/gift28.webp',
      price: {
        decimal: 200,
        cents: '00',
      },
    },
    {
      item: 'Panela de Arroz Elétrica',
      img: 'assets/gifts/gift29.webp',
      price: {
        decimal: 208,
        cents: '90',
      },
    },
    {
      item: 'Aspirador de Pó e Água Portátil',
      img: 'assets/gifts/gift30.webp',
      price: {
        decimal: 229,
        cents: '00',
      },
    },
    {
      item: 'Nossa Primeira Árvore de Natal',
      img: 'assets/gifts/gift31.webp',
      price: {
        decimal: 250,
        cents: '00',
      },
    },
    {
      item: 'Liquidificador 1,25L',
      img: 'assets/gifts/gift32.webp',
      price: {
        decimal: 252,
        cents: '00',
      },
    },
    {
      item: 'Mixer 4 em 1',
      img: 'assets/gifts/gift33.webp',
      price: {
        decimal: 255,
        cents: '55',
      },
    },
    {
      item: 'Jogo de Talheres 45 Peças',
      img: 'assets/gifts/gift34.webp',
      price: {
        decimal: 269,
        cents: '41',
      },
    },
    {
      item: 'Toalha de Mesa Xadrez',
      img: 'assets/gifts/gift35.webp',
      price: {
        decimal: 279,
        cents: '90',
      },
    },
    {
      item: 'Panela antiaderente 24cm',
      img: 'assets/gifts/gift36.webp',
      price: {
        decimal: 279,
        cents: '93',
      },
    },
    {
      item: 'Toalha de Mesa Estampa',
      img: 'assets/gifts/gift37.webp',
      price: {
        decimal: 299,
        cents: '90',
      },
    },
    {
      item: 'Travessa de Bolos e Tortas',
      img: 'assets/gifts/gift38.webp',
      price: {
        decimal: 299,
        cents: '90',
      },
    },
    {
      item: 'Jogo de Lençol 4 Peças QUEEN',
      img: 'assets/gifts/gift39.webp',
      price: {
        decimal: 379,
        cents: '99',
      },
    },
    {
      item: 'Kit para Servir 8 Peças',
      img: 'assets/gifts/gift40.webp',
      price: {
        decimal: 392,
        cents: '92',
      },
    },
    {
      item: 'Luminária de Chão',
      img: 'assets/gifts/gift41.webp',
      price: {
        decimal: 399,
        cents: '90',
      },
    },
    {
      item: 'Álbum de Memórias do Casal',
      img: 'assets/gifts/gift42.webp',
      price: {
        decimal: 419,
        cents: '90',
      },
    },
    {
      item: 'Ventilador de Torre',
      img: 'assets/gifts/gift43.webp',
      price: {
        decimal: 448,
        cents: '99',
      },
    },
    {
      item: 'Aparelho de Jantar 20 Peças',
      img: 'assets/gifts/gift44.webp',
      price: {
        decimal: 449,
        cents: '90',
      },
    },
    {
      item: 'Jogo de Lençol 4 Peças QUEEN',
      img: 'assets/gifts/gift45.webp',
      price: {
        decimal: 479,
        cents: '99',
      },
    },
    {
      item: 'Purificador de Água',
      img: 'assets/gifts/gift46.webp',
      price: {
        decimal: 574,
        cents: '21',
      },
    },
    {
      item: 'Micro-ondas',
      img: 'assets/gifts/gift47.webp',
      price: {
        decimal: 599,
        cents: '00',
      },
    },
    {
      item: 'Kit de Panelas 5 unidades',
      img: 'assets/gifts/gift48.webp',
      price: {
        decimal: 599,
        cents: '80',
      },
    },
    {
      item: 'Edredom Algodão QUEEN',
      img: 'assets/gifts/gift49.webp',
      price: {
        decimal: 599,
        cents: '99',
      },
    },
    {
      item: 'Penteadeira de Madeira',
      img: 'assets/gifts/gift50.webp',
      price: {
        decimal: 650,
        cents: '00',
      },
    },
    {
      item: 'Pillow Top QUEEN',
      img: 'assets/gifts/gift51.webp',
      price: {
        decimal: 699,
        cents: '99',
      },
    },
    {
      item: 'Conjunto Malas de Viagem',
      img: 'assets/gifts/gift52.webp',
      price: {
        decimal: 829,
        cents: '83',
      },
    },
    {
      item: 'Fogão Cooktop 5 Bocas',
      img: 'assets/gifts/gift53.webp',
      price: {
        decimal: 919,
        cents: '00',
      },
    },
  ]);
  public list3 = signal([
    {
      item: 'Rack para Sala',
      img: 'assets/gifts/gift54.webp',
      price: {
        decimal: 1010,
        cents: '00',
      },
    },
    {
      item: 'Kit Mesas de Centro',
      img: 'assets/gifts/gift55.webp',
      price: {
        decimal: 1143,
        cents: '51',
      },
    },
    {
      item: 'Robô Aspirador de Pó',
      img: 'assets/gifts/gift56.webp',
      price: {
        decimal: 1159,
        cents: '90',
      },
    },
    {
      item: 'Poltrona para Sala',
      img: 'assets/gifts/gift57.webp',
      price: {
        decimal: 1799,
        cents: '00',
      },
    },
    {
      item: 'Sorveteira Ninja',
      img: 'assets/gifts/gift58.webp',
      price: {
        decimal: 1799,
        cents: '10',
      },
    },
    {
      item: 'Samsung Smart TV 43" QLED 4K',
      img: 'assets/gifts/gift59.webp',
      price: {
        decimal: 2899,
        cents: '00',
      },
    },
    {
      item: 'Guarda-roupa Conjunto Closet',
      img: 'assets/gifts/gift60.webp',
      price: {
        decimal: 2938,
        cents: '86',
      },
    },
    {
      item: 'Sofá na Caixa modular',
      img: 'assets/gifts/gift61.webp',
      price: {
        decimal: 3033,
        cents: '00',
      },
    },
    {
      item: 'Lavadora de Roupas',
      img: 'assets/gifts/gift62.webp',
      price: {
        decimal: 3293,
        cents: '63',
      },
    },
    {
      item: 'Mesa de Jantar Redonda',
      img: 'assets/gifts/gift63.webp',
      price: {
        decimal: 3299,
        cents: '00',
      },
    },
    {
      item: 'Vídeo Maker do Casamento',
      img: 'assets/gifts/gift64.webp',
      price: {
        decimal: 3944,
        cents: '00',
      },
    },
    {
      item: 'Refrigerador Frost Free',
      img: 'assets/gifts/gift65.webp',
      price: {
        decimal: 5099,
        cents: '00',
      },
    },
  ]);
  public readonly options: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 4,
      },
      900: {
        items: 5,
      },
      1100: {
        items: 7,
      },
      1500: {
        items: 10,
      },
    },
  };
}
