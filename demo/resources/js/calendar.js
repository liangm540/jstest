var target = document.getElementsByTagName('li');
var month = [
"元旦1：你好阿道夫",
"元旦2：你好阿道夫",
"元旦3：你好阿道夫",
"元旦4：你好阿道夫",
"元旦5：你好阿道夫",
"元旦6：你好阿道夫",
"元旦7：你好阿道夫",
"元旦8：你好阿道夫",
"元旦9：你好阿道夫",
"元旦10：你好阿道夫",
"元旦11：你好阿道夫",
"元旦12：你好阿道夫",
]
// console.log(target);
for (var i = 0; i < target.length; i++) {
    target[i].index = i+1;
    var holi1 = document.getElementById("j_holi1");
    var holi2 = document.getElementById('j_holi2');
    
    target[i].onmouseover = function  () {
        // console.log(this);
        this.classList.add("change");
        var index = this.index;
        holi1.innerHTML =index+"月节日";
        holi2.innerHTML = month[index-1];
    }
    target[i].onmouseout = function  () {
        this.classList.remove("change");
    }

};