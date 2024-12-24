import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-dialog',
  standalone: false,
  
  templateUrl: './book-dialog.component.html',
  styleUrl: './book-dialog.component.css'
})
export class BookDialogComponent {
  decrementQuantity() {
    const currentValue = this.bookForm.get('quantity')?.value || 1;
    if (currentValue > 1) {
      this.bookForm.patchValue({ quantity: currentValue - 1 });
    }
  }
  
  incrementQuantity() {
    const currentValue = this.bookForm.get('quantity')?.value || 1;
    this.bookForm.patchValue({ quantity: currentValue + 1 });
  }
  @Input() visible: boolean = false;
  @Input() book: any = null;
  @Input() isEditing: boolean = false;

  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<number>();

  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      author: ['', Validators.required],
      price: [0, Validators.required],
    });
  }

  ngOnChanges() {
    if (this.book) {
      this.bookForm.patchValue(this.book);
    } else {
      this.bookForm.reset();
      this.bookForm.patchValue({ quantity: 1, price: 0 });
    }
  }

  onCloseDialog() {
    this.onClose.emit();
  }

  onSaveDialog() {
    if (this.bookForm.valid) {
      this.onSave.emit(this.bookForm.value);
    }
  }

  onDeleteDialog() {
    if (this.book) {
      this.onDelete.emit(this.book.id);
    }
  }
}
