 const scrollThreshold = 950; // Adjust this value as needed

        // Function to handle the scroll event
        function handleScroll() {
            // Select all elements with the class "change-me"
            const elementsToChange = document.querySelectorAll(".nav-link");
            const elementsToAlsoChange = document.querySelectorAll(".navbarChanged");

            // Loop through each element and apply CSS changes
            elementsToChange.forEach((element) => {
                // Check if the user has scrolled past the specified point
                if (window.scrollY > scrollThreshold) {
                    // Change CSS styles when scrolled past the point
                    element.style.color = "black";
                    element.style.fontWeight = "600";
                } else {
                    // Reset CSS styles when not scrolled past the point
                    element.style.color = "rgb(224, 211, 175)";
                }
            });

            if (window.scrollY > scrollThreshold) {
                // Change CSS styles when scrolled past the point
                elementToAlsoChange.style.backgroundColor = "red !important";
            } else {
                // Reset CSS styles when not scrolled past the point
                elementToAlsoChange.style.backgroundColor = "rgba(0, 0, 0, 0.142)";
            }
        }

        


        // Attach the scroll event listener to the window
        window.addEventListener("scroll", handleScroll);