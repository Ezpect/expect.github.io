export class Queue {
    constructor() {
       this.items = [];
       this.length = 0;
    }
 
 enqueue (adding) {
    this.items[this.length] = adding;
    this.length += 1;
 }
 dequeue() {
  
    if (this.length === 0) {
       return " Queue is Underflow";
    }
   let number = this.items[0];
    this.items.shift()
    this.length -= 1;
    return number;
 };
 display () {
   
     return this.items;

   }
  
 }