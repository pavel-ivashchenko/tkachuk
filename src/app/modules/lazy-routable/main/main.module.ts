
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { NgButtonModule, NgExpansionPanelModule, BrandSignatureModule, ScrollDownModule, FooterModule, CarouselModule, ArrowAnimatedButtonModule, ProductCardModule, SliderQuoteModule, InputModule } from '@app/modules/ui-partials';

import { MainRoutingModule } from './main-routing.module';

import { COMPONENTS } from './main-container';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MainRoutingModule,
    NgButtonModule,
    NgExpansionPanelModule,
    BrandSignatureModule,
    ScrollDownModule,
    FooterModule,
    CarouselModule,
    ArrowAnimatedButtonModule,
    ProductCardModule,
    SliderQuoteModule,
    InputModule
  ]
})
export class MainModule { }
