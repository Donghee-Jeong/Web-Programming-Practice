function getID(){
    letter[0] = document.getElementById("first");
    letter[1] = document.getElementById("second");
    letter[2] = document.getElementById("third");
}

function initialize(){
    for(var i=0;i<letter.length;i++){
        letter[i].innerHTML = "0";
        letter[i].style.color="purple";
    }
    letter[2].removeEventListener('click',randomNumber);
    letter[0].addEventListener('click',randomNumber);
}

function letterClick(){
    letter[i].addEventListener("click", randomNumber);
}

var randomNumber = function(){
    var random = Math.floor(Math.random() * 3);
    letter[i].innerHTML = random;
    letter[i].style.color="red";
    number[i] = random;
    i++;
    if(i==3){
        var obj = document.getElementById("parent");
        var newP = document.createElement("p");
        if(number[0]==number[1] && number[1]==number[2]){
            newP.innerHTML = "Success(click here to do again)";
        }
        else{
            newP.innerHTML = "Fail(click here to do again)";
        }
        newP.style.color = "purple";
        newP.addEventListener("click",
            function(){
                var p = this.parentElement;
                p.removeChild(this);
                i=0;
                initialize();
            }
        )
        obj.appendChild(newP);
    }
    else{
        letter[i].addEventListener("click", randomNumber);
        letter[i-1].removeEventListener("click",randomNumber);
    }
}

var letter = new Array(3);
var i = 0;
var number = new Array(3);

getID();
initialize();
letterClick();

