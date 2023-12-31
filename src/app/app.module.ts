import { SummaryPipe } from './summary.pipe';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, SummaryPipe, FavoriteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
