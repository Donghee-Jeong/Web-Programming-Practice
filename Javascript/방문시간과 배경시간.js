function SetBackgroundColor(){
    var now = new Date();
    var second = now.getSeconds();
    document.write(now.toLocaleTimeString());
    switch(second % 7){
        case 0:
            document.body.style.backgroundColor = "red"
            break;
        case 1:
            document.body.style.backgroundColor = "orange"
            break;
        case 2:
            document.body.style.backgroundColor = "yellow"
            break;
        case 3:
            document.body.style.backgroundColor = "green"
            break;
        case 4:
            document.body.style.backgroundColor = "blue"
            break;
        case 5:
            document.body.style.backgroundColor = "navy"
            break;
        case 6:
            document.body.style.backgroundColor = "purple"
            break;
    }
}