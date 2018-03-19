// 对css样式进行修改添加
// var para =document.getElementById("j_para").value; 
// var val = document.getElementById("j_val").value;
var target = document.getElementById("j_target");
var sub = document.getElementById("j_sub");
var re = document.getElementById("j_re");
sub.onclick=function  () {
    var para =document.getElementById("j_para").value; 
    var val = document.getElementById("j_val").value;
    console.log(para ,val);
    target.style.setProperty(para, val);
}
re.onclick=function  () {
    var form = document.getElementById("j_form");
    form.reset();
}
