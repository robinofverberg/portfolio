let scrollThreshold

if (window.innerWidth <= 480) { // For phone screens
    scrollThreshold = 450;
    console.log("You are on a phone resolution")
} else if (window.innerWidth <= 1920) { // For screens up to 1920x1080
    scrollThreshold = 890;
    console.log("You are on a 1920 resolution")
} else { // For 4k screens and larger
    scrollThreshold = 1250;
    console.log("You are on a large resolution")
}

// Function to handle the scroll event
function handleScroll() {
    // Select all elements with the class "change-me"
    const elementsToChange = document.querySelectorAll(".colorChange");
    const elementToAlsoChange = document.getElementById("navbar");

    // Loop through each element and apply CSS changes
    elementsToChange.forEach((element) => {
        // Check if the user has scrolled past the specified point
        if (window.scrollY > scrollThreshold) {
            // Change CSS styles when scrolled past the point
            element.style.color = "rgb(173, 168, 162)";
            element.style.fontWeight = "600";
        } else {
            // Reset CSS styles when not scrolled past the point
            element.style.color = "rgb(224, 211, 175)";
            element.style.fontWeight = "400";
        }
    });

    if (window.scrollY > scrollThreshold) {
        // Change CSS styles when scrolled past the point
        elementToAlsoChange.style.backgroundColor = "rgba(0, 0, 0, 0.850)";
    } else {
        // Reset CSS styles when not scrolled past the point
        elementToAlsoChange.style.backgroundColor = "rgba(0, 0, 0, 0.142)";
    }
}



// DOES NOT WORK OTHERWISE SORRY FOR BAD PRACTISE //:
window.addEventListener("scroll", handleScroll);

function test() {
    const elementsToChange = document.querySelectorAll(".colorChange");
    elementsToChange.forEach((element) => {
        // Check if the user has scrolled past the specified point
        element.style.color = "rgb(224, 211, 175)"
    });
}