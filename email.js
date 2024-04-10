document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const profileLink = document.getElementById("profileLink");
    const uploadLink = document.getElementById("uploadLink");

    // Function to check if search input is filled
    function isSearchInputFilled() {
        return searchInput.value.trim() !== "";
    }

    // Function to show alert if search input is not filled
    function showAlert() {
        alert("Please enter something to search.");
    }

    // Add event listener to search button
    searchButton.addEventListener("click", function(event) {
        if (!isSearchInputFilled()) {
            showAlert();
            event.preventDefault(); // Prevent default form submission behavior
        }
    });

    // Add event listener to profile link
    profileLink.addEventListener("click", function(event) {
        if (!isSearchInputFilled()) {
            showAlert();
            event.preventDefault(); // Prevent default link behavior
        }
    });

    // Add event listener to upload link
    uploadLink.addEventListener("click", function(event) {
        if (!isSearchInputFilled()) {
            showAlert();
            event.preventDefault(); // Prevent default link behavior
        }
    });
});
