function GuGuDan(){
    var number = GetNumber();
}

function GetNumber(){
    var number = prompt("정수를 입력하시오.");
    if(isNaN(number)){
        document.write("값을 입력하시오.");
    }
    else{
        number = parseInt(number);
        PrintGuGuDan(number);
    }
}

function PrintGuGuDan(number){
    for(var i=1;i<10;i++){
        document.write("<p>"+number+" * "+i+" = "+i*number+"</p>");
    }
}