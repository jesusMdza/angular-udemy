import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './app.courses.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { ChangeTitlePipe } from './change-title.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    ChangeTitlePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
