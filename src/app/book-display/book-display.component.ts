import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {data} from '../../assets/book-data';


@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  addRowData;
  isEditOn: boolean = false;
  rowIndex: number = null;
  tableData: Array<{ title: String, author: String, price: Number, editable?: boolean }> = []

  constructor(private form: FormBuilder, private router: Router) {
    this.addRowData = this.form.group({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    data.forEach(book => {
      this.tableData.push({...book, editable: false});
    })
  }

  onSubmit(newBookData: { title: String, author: String, price: Number }) {
    this.tableData.push(newBookData);
    this.addRowData.reset();
  }

  viewBookDetails(data: { title: String, author: String, price: Number, editable?: boolean }) {
    this.router.navigate(['../book-view'], {state: data})
  }
}
