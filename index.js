let saveEl = document.getElementById("saved-entries");
let countEl = document.getElementById("countstart");
let count = 0;

function startCount() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
