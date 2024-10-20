function volume_sphere(event) {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();

    // Get the radius input value
    let elem1 = document.getElementById("radius").value;
    let rad = parseFloat(elem1); // Convert input to a number
    let elem2 = document.getElementById("volume"); // Get the volume input

    // Check if the radius is a valid number and positive
    if (!isNaN(rad) && rad > 0) {
        // Calculate the volume
        let ans = (4 / 3) * Math.PI * Math.pow(rad, 3);
        // Display the result in the volume input
        elem2.value = ans; // Use 'value' to set the input value
    } else {
        // Display error message if input is invalid
        elem2.value = "Invalid input";
    }
}

// Set the form's submit event to call the volume_sphere function
window.onload = function() {
    document.getElementById('MyForm').addEventListener('submit', volume_sphere); // Use addEventListener for form submission
};
