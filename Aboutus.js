
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

    document.addEventListener('DOMContentLoaded', function () {
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        const closeBtn = document.querySelector('.close-btn');
        const menu = document.querySelector('.navbar .links');

        // Toggle menu when hamburger button is clicked
        hamburgerBtn.addEventListener('click', function () {
            menu.classList.add('show-menu');
        });

        // Close menu when close button is clicked
        closeBtn.addEventListener('click', function () {
            menu.classList.remove('show-menu');
        });
    });

    

    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return new Date(date).toLocaleString('en-US', options);
    }

    // Set the creation date
    document.getElementById("creationDate").innerHTML = formatDate(document.dateCreated);

    // Set the last update date
    document.getElementById("lastUpdateDate").innerHTML = formatDate(document.lastModified);

    // Set the data collection date
    document.getElementById("dataCollectionDate").innerHTML = formatDate(document.dataCollectionDate);
