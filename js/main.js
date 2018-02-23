//HEADER ON SCROLL


var header = document.getElementById('header');

window.onscroll = function() {
    if (window.pageYOffset > 300) {
        header.classList.add("header--dark");
    
    } else {
        header.classList.remove("header--dark");
    }
};
		

