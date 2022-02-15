const element = document.getElementById("button");
function myFunction() {
  const x = document.getElementById("heightNum").value;
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
 rowStr.innerText = string;
 document.body.appendChild(rowStr);
 const element = document.getElementById("button");
 element.addEventListener("click", secFunction);
 function secFunction() {
   var myobj = document.getElementById("rowStr");
   myobj.remove();
 }
}