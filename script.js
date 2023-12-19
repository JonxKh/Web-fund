
// Submit//
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});


// search-btn//
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');

    searchIcon.addEventListener('click', function () {
        // Toggle the display property of the search form
        if (window.getComputedStyle(searchForm).display === 'none') {
            searchForm.style.display = 'flex';
        } else {
            searchForm.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');

    searchIcon.addEventListener('click', function () {
        // Toggle the active class to show/hide the search form
        searchForm.classList.toggle('active');
    });
});


function handleButtonClick() {
    // Define the outcome or action you want to perform when the button is clicked
    alert('Your submittion has successfully submitted!'); // Replace this with your desired outcome
}

//** */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('.animated-text');

    function checkScroll() {
        animatedElements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initial check when the page loads
    checkScroll();

    // Listen for scroll events and check for elements in the viewport
    window.addEventListener('scroll', checkScroll);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.product_nav a');

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -220;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('.product_nav a[href*=' + id + ']').classList
            .add('active');
        });
    };
});
}

