
let countEl = document.getElementById("count-el");
let saveButton = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let history = count + " - ";
  saveEl.textContent += history;
  console.log(count);
  count = 0;
  countEl.textContent = count;
}
