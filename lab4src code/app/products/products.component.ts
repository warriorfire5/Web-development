import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true, 
  imports: [CommonModule] 
})

export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Wooden Wardrop',
      description: 'Wooden made wardrop from ikea sweden',
      rating: 5,
      price: 300990,
      images: [
        'https://cdn0.divan.ru/img/v1/h635el5JPVIYnx9BLiKteA0wcw-CW94o23Ve2N-TGUA/t:0::0:0:0/pd:60:60:60:60/rs:fit:499:814:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5OTI1MzMucG5n.jpg',
        'https://cdn0.divan.ru/img/v1/D6LKY0JsUhyAGYPj308xwqL6yybV_0p0h0kX2uwh6pI/t:0::0:0:0/pd:60:60:60:60/rs:fit:499:814:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5OTI1MzQucG5n.jpg',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 2,
      name: 'Tommy-Hilfiger coat',
      description: 'Warm autumn coat from Tommy Hilfiger with real fur',
      rating: 5,
      price: 50090,
      images: [
        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM5083s5.jpg?im=Resize,width=480',
        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM5083s6.jpg?im=Resize,width=480',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
    {
      id: 3,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Smartphone Apple iPhone 15 Pro Max 256GB Natural Titanium',
      rating: 5,
      price: 699990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 4,
      name: 'Lego Star-Wars',
      description: 'New Lego Star-Wars set 501st Legion',
      rating: 5,
      price: 12990,
      images: [
        'https://m.media-amazon.com/images/I/81z+qvRB1EL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61LZu8YsyJL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71mHoG1r4cL._AC_SL1500_.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
    {
      id: 5,
      name: 'Manga Monster',
      description: 'Naoki Urasawa, Monster detective manga during late Cold-War',
      rating: 5,
      price: 3450,
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/815xJbtOVfL._AC_UL232_SR232,232_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81+TuMyIL0L._AC_UL232_SR232,232_.jpg',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 10,
      name: 'Asics GEL-Kayano 14 Metallic Plum',
      description: 'Asics white and grey mixed sneakers for running',
      rating: 5,
      price: 59000,
      images: [
        'https://cdn-images.farfetch-contents.com/20/76/79/16/20767916_50868138_1000.jpg',
        'https://cdn-images.farfetch-contents.com/20/76/79/16/20767916_50868140_1000.jpg',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    }
  ];  // Fixed closing bracket

  shareOnWhatsApp(product: Product) {
    const text = `Check out ${product.name} on Kaspi.kz: ${product.kaspiLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(product: Product) {
    const text = `Check out ${product.name} on Kaspi.kz: ${product.kaspiLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  }

  nextImage(product: Product) {
    if (product.currentImageIndex < product.images.length - 1) {
      product.currentImageIndex++;
    } else {
      product.currentImageIndex = 0;
    }
  }
  
  prevImage(product: Product) {
    if (product.currentImageIndex > 0) {
      product.currentImageIndex--;
    } else {
      product.currentImageIndex = product.images.length - 1;
    }
  }

  goToKaspi(product: Product) {
    window.open(product.kaspiLink, '_blank');
  }
}

