const date = new Date();

const dateString = date.toDateString();
const timeString = date.toLocaleTimeString();
document.write(dateString+" & "+ timeString);

const year = new Date();
const currentYear = now.getFullYear();
document.write(currentYear);

const button = document.getElementById("counterButton");
const output = document.getElementById("counterOutput");
let count = 0;
button.addEventListener("click", function() {
  count++;
  output.textContent = "count " + count;
});
