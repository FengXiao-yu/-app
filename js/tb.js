//728 冯晓宇 
// 2022-11-16
var t=document.querySelectorAll(".tab");  //给所有的tab选项卡定义为t
for(var i=0;i<t.length;i++){
    tabs(t[i]);
}

function tabs(tab){
    // dom
    var tt=tab.querySelector(".tt");
    var span=tt.querySelectorAll("span");
    var tc=tab.getElementsByClassName("tc");
    console.log(tab,tt,span,tc);

    for(let i=0;i<span.length;i++){
        span[i].index=i;
        span[i].onmouseover=function(){
            for(let j=0;j<span.length;j++){
                span[j].classList.remove("cur");
                //删除类cur
                tc[j].style.display="none";
            }
            /* this.classList.add("cur"); */
            span[i].classList.add("cur");
            /* tc[this.index].style.display="block"; */
            tc[i].style.display="block";
        }
    }
}