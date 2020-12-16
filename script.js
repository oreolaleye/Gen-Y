var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function change1() {
    document.getElementById("goals").classList.remove("vis-active")
    document.getElementById("values").classList.remove("vis-active")
    document.getElementById("vision").classList.add("vis-active")
    document.getElementById("con-2").classList.add("hide")
    document.getElementById("con-3").classList.add("hide")
    document.getElementById("con-1").classList.remove("hide");
}

function change2() {
    document.getElementById("vision").classList.remove("vis-active")
    document.getElementById("values").classList.remove("vis-active")
    document.getElementById("goals").classList.add("vis-active")
    document.getElementById("con-1").classList.add("hide")
    document.getElementById("con-3").classList.add("hide")
    document.getElementById("con-2").classList.remove("hide");
}

function change3() {
    document.getElementById("goals").classList.remove("vis-active")
    document.getElementById("vision").classList.remove("vis-active")
    document.getElementById("values").classList.add("vis-active")
    document.getElementById("con-1").classList.add("hide")
    document.getElementById("con-2").classList.add("hide")
    document.getElementById("con-3").classList.remove("hide");
}