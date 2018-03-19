

var obj = document.getElementById("cc");
var sty = document.defaultView.getComputedStyle(obj,null);
var bag =obj.style.background;
var bag = sty.backgroundColor;
console.log(bag);
obj.style.background="green";


