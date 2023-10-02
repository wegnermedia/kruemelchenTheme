function hideElementsWithoutClass() {
    // Get all elements with the class 'product-detail-configurator-option-input'
    var elements = document.querySelectorAll('.product-detail-configurator-option-input');

    // Iterate through each element and hide its parent if it does not have the class 'is-combinable'
    elements.forEach(function(element) {
        if (!element.classList.contains('is-combinable')) {
            var parent = element.parentElement;
            if (parent) {
                parent.style.display = 'none';
            }
        }
    });
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    hideElementsWithoutClass();
});