import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpeedrunsComponent } from './speedruns/speedruns.component';
import { SpeedrunService } from './speedruns/speedrun.service';
import { TimerPipe } from './pipes/timer.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    SpeedrunsComponent,
    TimerPipe,
    OrdinalPipe,
    SpinnerComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SpeedrunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
