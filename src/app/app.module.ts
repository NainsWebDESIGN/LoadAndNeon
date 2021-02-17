import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';


import { AppComponent } from './app.component';
import { LoadingComponent } from './Loading/Loading.component';
import { NeonLightComponent } from './NeonLight/NeonLight.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NeonLightComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
