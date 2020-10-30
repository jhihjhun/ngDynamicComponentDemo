import { Component, OnInit } from '@angular/core';
import { BannerItem } from './banner/banner-item';
import { BannerService } from './banner/banner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngDynamicComponentDemo';

  banner: BannerItem;
  private _bannerType = 'banner1';
  private banner1Data = {
    bannerType: 'banner1',
    cars: [
      { brand: 'VW', year: 2012, color: 'Orange' },
      { brand: 'Audi', year: 2011, color: 'Black' },
      { brand: 'Renault', year: 2005, color: 'Gray' },
      { brand: 'BMW', year: 2003, color: 'Blue' },
      { brand: 'Mercedes', year: 1995, color: 'Orange' },
      { brand: 'Volvo', year: 2005, color: 'Black' },
      { brand: 'Honda', year: 2012, color: 'Yellow' },
      { brand: 'Jaguar', year: 2013, color: 'Orange' },
      { brand: 'Ford', year: 2000, color: 'Black' },
      { brand: 'Fiat', year: 2013, color: 'Red' }
    ]
  };

  private banner2Data = {
    bannerType: 'banner2',
    imageUrl: 'https://fakeimg.pl/350x200/?text=Hello',
  };

  private data: any;

  get bannerType() {
    return this._bannerType;
  }

  set bannerType(value) {
    this._bannerType = value;
    this.setDynamicBannerComponent();
  }

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.setDynamicBannerComponent();
  }

  setDynamicBannerComponent(): void {

    switch (this._bannerType) {
      case 'banner1':
        this.data = this.banner1Data;
        break;

      case 'banner2':
        this.data = this.banner2Data;
        break;
      default:
        break;
    }

    this.banner = this.bannerService.getBanners(this._bannerType, this.data);
  }
}
