import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDisplayComponent } from './book-display/book-display.component';
import { ActionBtnDirective } from './action-btn.directive';
import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDisplayComponent,
    ActionBtnDirective,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
