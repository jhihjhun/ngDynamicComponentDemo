import { Injectable } from '@angular/core';
import { BannerItem } from './banner-item';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  getBanners(bannerType: string, data: any): BannerItem {
    switch (bannerType) {
      case 'banner1':
        return new BannerItem(Banner1Component, data);

      case 'banner2':
        return new BannerItem(Banner2Component, data);

      default:
        break;
    }
  }
}
