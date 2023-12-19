document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript (your-script.js)
document.addEventListener('DOMContentLoaded', function () {
    var categoryLinks = document.querySelectorAll('.category a');

    categoryLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var sectionId = link.dataset.section;
            scrollToSection(sectionId);
        });
    });

    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            var offset = section.offsetTop - document.querySelector('.category').offsetHeight;
            window.scroll({
                top: offset,
                behavior: 'smooth'
            });
        }
    }
});