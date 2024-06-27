window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        const navbarPC = document.getElementById('navbarcontent');
        if (window.scrollY > 0) {
            navbarPC.classList.add('navbar-scrolled');
        } else {
            navbarPC.classList.remove('navbar-scrolled');
        }
    });
});

function openPopup() {
    document.getElementById('popup').classList.add('open');
}

function closePopup() {
    document.getElementById('popup').classList.remove('open');
}


/* Volet deroulant */

document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion-button');
    var accordionContents = document.querySelectorAll('.accordion-content');

    accordionButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var content = accordionContents[index];
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

