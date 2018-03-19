var dis=document.getElementsByClassName("j_dis");
var childdis=document.getElementsByClassName("j_childdis");
    for (var i = 0; i <dis.length; i++) {
        dis[i].onclick=function  () {
            var num = this.getAttribute("value");
            var olddisstyle = document.defaultView.getComputedStyle(childdis[num-1],null);
            var olddisplay = olddisstyle.display;
            for (var j = 0; j <childdis.length; j++) { 
                var computedStyle = document.defaultView.getComputedStyle(childdis[j], null);
                if (computedStyle.display  == "block") {
                    childdis[j].style.display = "none";

                };
               if (olddisplay == "none") {
                    childdis[num-1].style.display = "block"
               }
               else  childdis[num-1].style.display = "none"
               
            };

        }

    }



