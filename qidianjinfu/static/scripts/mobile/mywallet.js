var headerBtn = document.querySelector("#jf-header-btn");
var headerNone = document.querySelector(".jf-header-hidden");
var body = document.querySelector("body");
var flag = false;
headerBtn.onclick=function () {
    flag=!flag;
    if(flag){
        selfNone.style.height = "0rem";
        selfMeng.style.display = "none";
        headerNone.style.height = "20rem";
        body.style.overflow = "hidden";
    }else{
        selfNone.style.height = "0rem";
        selfMeng.style.display = "none";
        headerNone.style.height = "0rem";
        body.style.overflow = "auto";
    }
};
var selfBtn = document.querySelector("#jf-self-btn");
var selfNone = document.querySelector(".jf-header-self");
var selfMeng = document.querySelector(".jf-mengban");
selfBtn.onclick=function () {
    flag=!flag;
    if(flag){
        headerNone.style.height = "0rem";
        selfNone.style.height = "13.7rem";
        body.style.overflow = "hidden";
        selfMeng.style.display = "block";
    }else{
        headerNone.style.height = "0rem";
        selfNone.style.height = "0rem";
        body.style.overflow = "auto";
        selfMeng.style.display = "none";
    }
}
var upMore = document.querySelectorAll(".jf-caozuo-list>img");
var upHidden = document.querySelectorAll(".jf-caozuo");
var topList = document.querySelectorAll(".jf-caozuo-list");
for(let i=0;i<upMore.length;i++){
    upMore[i].onclick=function () {
        flag=!flag;
        if(flag){
            upHidden[i].style.height = "2rem";
            // upMore.src = "../../static/images/mobile/home/xiala2.png";
            upMore[i].style.transform = "rotate(-180deg)";
            topList[i].style.color = "#006CC8";
        }else{
            upHidden[i].style.height = "0rem";
            // upMore.src = "../../static/images/mobile/home/xiala.png";
            upMore[i].style.transform = "rotate(0deg)"
            topList[i].style.color = "#666"
        }
    }
}













