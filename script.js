
function toggleMenu(x) {
    x.classList.toggle("change");
    const menuContent = document.getElementById("menuContent");
    menuContent.classList.toggle("show");
}

fetch('basicInfo.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const bodyContent = doc.body.innerHTML;
        document.getElementById('basic-content').innerHTML = bodyContent;})

fetch('advancedInfo.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const bodyContent = doc.body.innerHTML;
        document.getElementById('advanced-content').innerHTML = bodyContent;})


function showBasicContent() {
    // Set display to flex for basic-content
    document.getElementById('basic-content').style.display = 'flex';
    
    // Set display to none for advanced-content and main-content
    document.getElementById('advanced-content').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
}

function showAdvancedContent() {
    // Set display to flex for basic-content
    document.getElementById('basic-content').style.display = 'none';
    
    // Set display to none for advanced-content and main-content
    document.getElementById('advanced-content').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
}

function showMainContent() {
    // Set display to flex for basic-content
    document.getElementById('basic-content').style.display = 'none';
    
    // Set display to none for advanced-content and main-content
    document.getElementById('advanced-content').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
}
