import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

example:{ title: String, author: String, price: Number};
constructor(private router: Router) { 
  // console.log(this.router.getCurrentNavigation().extras.state);
}

  ngOnInit(): void {
    // console.log(history.state)
    if (!history.state['title']) this.router.navigate(['../book-display']);
    this.example = history.state;
  }

}
