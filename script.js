document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the "active" class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add the "active" class to the clicked button and corresponding content
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            button.classList.add('active');
            tabContent.classList.add('active');
        });
    });
});
