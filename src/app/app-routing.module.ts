import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDisplayComponent } from './book-display/book-display.component';
import { BookViewComponent } from './book-view/book-view.component';


const routes: Routes = [
  { path: 'book-display', component: BookDisplayComponent },
  { path: 'book-view', component: BookViewComponent },
  {path: '', redirectTo: 'book-display', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
