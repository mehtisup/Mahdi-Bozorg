
window.onscroll = function() {scrollFunction()}

var force = window.pageYOffset;


function scrollFunction() {

    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        var myForce = window.pageYOffset;

        if (force > myForce) {
        document.getElementById("iGoat").style.display = "block";
        } else {
        document.getElementById("iGoat").style.display = "none";
        }
        force = myForce;

    } else {
        document.getElementById("iGoat").style.display = "none";
    }





    

    
    
    
    

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scroll").style.display = "block";
        document.getElementById("th").style.display = "block";
        
    } else {
        document.getElementById("scroll").style.display = "none";
        document.getElementById("th").style.display = "none";
        
    }

    
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById("menu").style.display = "block";
        document.getElementById("mobilePhone").style.display = "block";

        

        
        document.getElementById("blackMenu").style.display = "block";
    } else {
        document.getElementById("menu").style.display = "none";
        document.getElementById("mobilePhone").style.display = "none";
        
   


        
    }


    


    






}












