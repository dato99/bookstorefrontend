import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../Models/book';
import { on } from 'events';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-manager',
  standalone: false,
  
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent implements OnInit {
  @ViewChild('dataTable') dataTable!: Table; // Reference to the PrimeNG table

  books: Book[] = [];
  isDialogVisible: boolean = false;
  isEditing: boolean = false;
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  showAddDialog() {
    this.isEditing = false;
    this.selectedBook = null;
    this.isDialogVisible = true;
  }

  onRowSelect(event: any) {
    this.isEditing = true;
    this.selectedBook = { ...event.data }; // Clone the selected book
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
  }

  saveBook(book: Book) {
    if (this.isEditing) {
      this.bookService.updateBook(book.id, book).subscribe(() => {
        this.loadBooks();
        this.isDialogVisible = false;
      });
    } else {
      this.bookService.addBook(book).subscribe(() => {
        this.loadBooks();
        this.isDialogVisible = false;
      });
    }
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.loadBooks();
      this.isDialogVisible = false;
    });
  }

  filterTable(event: Event, field: string) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dataTable.filter(inputValue, field, 'contains');
  }
}