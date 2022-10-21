import {Queue} from './QueueMain.js';

let QUEUE = new Queue();

let theResult = document.querySelector(".result");
let theButton = document.querySelector(".display");
let insert = document.querySelector(".enqueButton");
let remove = document.querySelector(".dequeButton");


theButton.addEventListener("click", () => {
   theResult.innerHTML =  QUEUE.display();
  
});
insert.addEventListener("click", () => {
   let adding =document.querySelector(".insertValue").value;
   theResult.innerHTML = adding + "   Is Added to The Queue System";
  QUEUE.enqueue(adding);
});
remove.addEventListener("click", () => {
   theResult.innerHTML =
   QUEUE.dequeue() + "    Is Removed Front Of The Queue";
});