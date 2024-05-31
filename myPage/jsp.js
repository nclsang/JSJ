// app.js
function page1Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'block';
    const one =
        document.getElementById('page2');
    one.style.display = 'none';
    const two =
        document.getElementById('page3');
    two.style.display = 'none';


}
function page2Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'none';
    const one =
        document.getElementById('page2');
    one.style.display = 'block';
    const two =
        document.getElementById('page3');
    two.style.display = 'none';
}
function page3Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'none';
    const one =
        document.getElementById('page2');
    one.style.display = 'none';
    const two =
        document.getElementById('page3');
    two.style.display = 'block';
}

window.onload = page1Click;



document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.firstnavbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});


