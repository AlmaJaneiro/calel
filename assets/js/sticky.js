
    document.addEventListener("DOMContentLoaded", function(){
        window.onscroll = function() {myFunction()};
        // Get the header
        const header = document.getElementById("navbar");
        // Get the offset position of the navbar
        const sticky = header.offsetTop;
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        const myFunction = () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("fixed-top");
            } else {
                header.classList.remove("fixed-top");
            }
        }
    }); 