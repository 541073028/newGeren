{
//
// //初始角度
//     var degree = 0;

//单次旋转
//     function singleRotate() {
//         //一次增加50度
//         degree = degree + 50 * Math.PI / 180;
//         ele.css("transform","rotate("+degree+"deg)");
//     }
    let music=document.querySelector("#music");
        var angle = 0;
        musicsetInterval(function () {
            angle += 3;
            $('#music').rotate(angle);
        }, 50);

    music.onclick=function (ele) {//给toTop添加鼠标点击事件
        var degree = 0;
        degree = degree + 50 * Math.PI / 180;
        ele.css("transform","rotate("+degree+"deg)");
    };
    music.onmouseup=function () {
        document.onmousemove=null;//取消移动事件
        this.style.background="";
    };
}


{
    let toTop=document.querySelector(".toTop");
//获取toTop元素
toTop.onclick=function () {//给toTop添加鼠标点击事件
    document.documentElement.scrollTop=0;//这是一个返回顶部按键的效果
};
//documentElement.scrollTop，文档超出浏览器窗口Top的位置（距离）值

}