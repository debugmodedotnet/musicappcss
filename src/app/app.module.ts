import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxNavigationDrawerModule, 
  IgxNavbarModule,
   IgxLayoutModule, 
   IgxRippleModule,
   Direction,
   IgxCarouselComponent,
   IgxCarouselModule,
   IgxLinearProgressBarComponent,
   IgxProgressBarModule,
   IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
  IgxListModule,
  IgxTabsModule ,
  IgxCardModule,
	IgxInputGroupModule,
   IgxSliderModule } from 'igniteui-angular/main';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxCarouselModule,
		IgxProgressBarModule,
    IgxSliderModule,
    IgxAvatarModule,
    IgxCardModule,
    IgxTabsModule ,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
