
var baby = 1;
babyFunction(baby);

function moveFunction(n) {
    babyFunction(baby += n);
}

function dotFunction(n) {
    babyFunction(baby = n);
}

function babyFunction(n) {
    var i;
    var babies = document.getElementsByClassName("myMask");
    var dots = document.getElementsByClassName("dot");
    if (n > babies.length) {baby = 1}
    if (n < 1) {baby = babies.length}
    for (i = 0 ; i < babies.length ; i++) {
        babies[i].style.display = "none";
    }
    for (i = 0 ; i < dots.length ; i++) {
        dots[i].className = dots[i].className.replace(" mctive", "")
    }
    babies[baby-1].style.display = "block";
    dots[baby-1].className += " mctive";
    
}

function ayeFunction() {
    document.getElementById("in").value = "";
}
