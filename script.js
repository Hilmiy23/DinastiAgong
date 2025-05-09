let colors = ['rgb(180, 216, 228)', 'rgb(160, 67, 67)', 'rgb(225, 122, 26)', 'rgb(67, 160, 71)']; // Array of colors
let currentIndex = 0;

function changeBackgroundColorInOrder() {
    const body = document.body;
    body.style.backgroundColor = colors[currentIndex]; // Set the background color
    currentIndex = (currentIndex + 1) % colors.length; // Move to the next color, cycle back to the start
}

function toggleText() {
    const dots = document.getElementById("dots");
    const longText = document.getElementById("long-text");
    const button = document.querySelector(".fancy-button");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        longText.style.display = "none";
        button.textContent = "Read More";
    } else {
        dots.style.display = "none";
        longText.style.display = "block";
        button.textContent = "Read Less";
    }
}