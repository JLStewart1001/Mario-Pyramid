
let x = prompt("Enter a number")
let string = ""
for (let i = 1; i <= x; i++) {
  for (let j = 0; j < x - i; j++) {
    string += " . ";
  }
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}

var rowStr = document.createElement("p");
rowStr.innerText = string;
document.body.appendChild(rowStr);