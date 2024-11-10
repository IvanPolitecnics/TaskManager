document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('user-icon');
    const dropdownMenu = document.querySelector('.dropdown');

    userIcon.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
