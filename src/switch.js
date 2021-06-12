function switchmydata(card1,card2){
    var a = document.getElementById(card1).innerHTML;
    var b = document.getElementById(card2).innerHTML;
    document.getElementById(card2).innerHTML = a;
    document.getElementById(card1).innerHTML = b;
}