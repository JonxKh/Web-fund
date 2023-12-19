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
