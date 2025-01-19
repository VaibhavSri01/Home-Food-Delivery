// JavaScript for handling search functionality
function searchRestaurants() {
    const searchTerm = document.querySelector('input').value;
    if (searchTerm.trim() === "") {
        alert("Please enter a search term!");
    } else {
        alert('Searching for: ' + searchTerm);
        console.log('Searching for:', searchTerm);
    }
}