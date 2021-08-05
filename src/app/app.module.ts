import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterCloudsComponent } from './components/footer-clouds/footer-clouds.component';
import { TableComponent } from './components/table/table.component';
import { GraphicComponent } from './components/graphic/graphic.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterCloudsComponent,
    TableComponent,
    GraphicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
