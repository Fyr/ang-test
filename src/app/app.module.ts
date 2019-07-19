import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { ServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';

import { LicenseManager } from 'ag-grid-enterprise';

import { environment } from '../environments/environment';
LicenseManager.setLicenseKey(environment.AgGrid.licenceKey);

import { AppComponent } from './app.component';
import { TGridComponent } from './components/ag-grid/t-grid/t-grid.component';
import { TImageComponent } from './components/ag-grid/cell-renderers/t-image/t-image.component';
import { TLinkComponent } from './components/ag-grid/cell-renderers/t-link/t-link.component';
import { TCheckboxComponent } from './components/ag-grid/cell-renderers/t-checkbox/t-checkbox.component';
import { TDateComponent } from './components/ag-grid/cell-renderers/t-date/t-date.component';
import { THeaderCheckboxComponent } from './components/ag-grid/cell-renderers/t-checkbox/t-header-checkbox.component';
import { TBarComponent } from './components/ag-grid/t-bar/t-bar.component';
import { TSwitchComponent } from './components/t-switch/t-switch.component';
import { TPageComponent } from './components/t-page/t-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TGridComponent,
    TImageComponent,
    TLinkComponent,
    TCheckboxComponent,
    TDateComponent,
    THeaderCheckboxComponent,
    TBarComponent,
    TSwitchComponent,
    TPageComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      TImageComponent,
      TLinkComponent,
      TCheckboxComponent,
      TDateComponent,
      THeaderCheckboxComponent,
      TBarComponent
    ]),
    ServicesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
