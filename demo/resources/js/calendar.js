var target = document.getElementsByTagName('li');
var month = [
"Ԫ��1����ð�����",
"Ԫ��2����ð�����",
"Ԫ��3����ð�����",
"Ԫ��4����ð�����",
"Ԫ��5����ð�����",
"Ԫ��6����ð�����",
"Ԫ��7����ð�����",
"Ԫ��8����ð�����",
"Ԫ��9����ð�����",
"Ԫ��10����ð�����",
"Ԫ��11����ð�����",
"Ԫ��12����ð�����",
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
        holi1.innerHTML =index+"�½���";
        holi2.innerHTML = month[index-1];
    }
    target[i].onmouseout = function  () {
        this.classList.remove("change");
    }

};