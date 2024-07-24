
function toggleMenu(x) {
    x.classList.toggle("change");
    document.getElementById("menuContent").classList.toggle("show");
}

// Load the body content of index.html into the menu
fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const bodyContent = doc.body.innerHTML;
        document.getElementById('menuContent').innerHTML = bodyContent;
    })
    .catch(error => console.error('Error loading menu.html:', error));
