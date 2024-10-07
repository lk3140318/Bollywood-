// Function to toggle item details visibility
document.querySelectorAll('.item-list a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Hide all item details
        document.querySelectorAll('.item-detail').forEach(function(detail) {
            detail.style.display = 'none';
        });
        
        // Show the clicked item's detail
        const target = document.querySelector(link.getAttribute('href'));
        target.style.display = 'block';
    });
});

// Function to search items
function searchItems() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const items = document.getElementById('itemList').getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        const itemName = item.textContent.toLowerCase();
        if (itemName.indexOf(searchInput) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show secondary title
