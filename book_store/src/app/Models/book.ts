export class Book {
    id: number;
    title: string;
    quantity: number;
    author: string;
    price: number;
  
    constructor(id: number, title: string, quantity: number, author: string, price: number) {
      this.id = id;
      this.title = title;
      this.quantity = quantity;
      this.author = author;
      this.price = price;
    }
  }