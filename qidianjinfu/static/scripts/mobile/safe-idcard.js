var showBtn = document.querySelector(".jf-safe-list2>img:nth-child(4)");
var demoInput = document.getElementById("demo_input");
    showBtn.onclick=function () {
        if (demoInput.type == "password") {
            demoInput.type = "text";
            showBtn.src = "../../static/images/mobile/home/login-show1.png";
        }else {
            demoInput.type = "password";
            showBtn.src = "../../static/images/mobile/home/login-show2.png";
        }
    }
