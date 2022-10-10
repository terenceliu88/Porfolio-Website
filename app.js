const hamburgerButton = document.getElementById('hamburger')
const navItems = document.getElementById('nav-items')

function toggleButton() {
    navItems.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)