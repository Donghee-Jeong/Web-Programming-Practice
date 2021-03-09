var now = new Date();
function clock(){
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    document.write(hour +":"+ minute+":" + second)

    var hourLine = document.getElementById("hour");
    hourLine.style.transform = "rotate("+(hour*30-90)+"deg)";
    var minuteLine = document.getElementById("minute");
    minuteLine.style.transform = "rotate(" + (minute*6-90) + "deg)";
    var secondLine = document.getElementById("second");
    secondLine.style.transform = "rotate(" + (second*6-90) + "deg)";
}