import { Component, ComponentFactoryResolver, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { BannerItem } from '../banner-item';
import { BannerDirective } from '../banner.directive';
import { Banner1Component } from '../banner1/banner1.component';
import { IBanner } from '../ibanner';

@Component({
  selector: 'app-base-banner',
  templateUrl: './base-banner.component.html',
  styleUrls: ['./base-banner.component.scss']
})
export class BaseBannerComponent implements OnInit, OnChanges {

  @Input() banner: BannerItem;
  @ViewChild(BannerDirective, { static: true }) appBanner: BannerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadBannerComponent();
  }

  ngOnChanges(): void {
    // 一旦檢測到該元件或指令的輸入屬性發生了變化，Angular 就會呼叫它的 ngOnChanges() 方法。
    this.loadBannerComponent();
  }

  loadBannerComponent(): void {

    const bannerItem = this.banner;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(bannerItem.component);

    const viewContainerRef = this.appBanner.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    // 將資料傳遞給元件
    (componentRef.instance as IBanner).data = bannerItem.data;

    if (componentRef.componentType === Banner1Component) {

      // 接收元件內事件
      componentRef.instance.banner1PageChangeEmit.subscribe((pageIndex: any) => {
        console.log(pageIndex);
      });
    }
  }
}
