document.addEventListener('DOMContentLoaded', function () {
    // Animated Text
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

    // Call checkScroll on page load
    checkScroll();

    // Call checkScroll on scroll
    window.addEventListener('scroll', checkScroll);
});
