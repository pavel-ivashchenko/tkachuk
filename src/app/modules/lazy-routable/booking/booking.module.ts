
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ArticleCardModule, ProductCardModule, TabsModule, DatePickerModule, ButtonPrimaryModule, ButtonSecondaryModule } from '@app/modules/ui';

import { BookingRoutingModule } from './booking-routing.module';

import { PAGES } from './pages';
import { PIPES } from './pipes';
import { PARTIALS } from './partials';


@NgModule({
  declarations: [
    ...PAGES,
    ...PARTIALS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingRoutingModule,
    HeaderModule,
    FooterModule,
    TabsModule,
    ArticleCardModule,
    ProductCardModule,
    DatePickerModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    CoreTranslationModule.forChild()
  ]
})
export class BookingModule { }
