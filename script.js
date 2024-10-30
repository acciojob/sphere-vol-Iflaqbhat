function volume_sphere(event) {
    event.preventDefault();

    let elem1 = document.getElementById("radius").value;
    let rad = parseFloat(elem1); // Convert input to a number
    let elem2 = document.getElementById("volume"); // Get the volume output element
    if (!isNaN(rad) && rad >= 0) { // Ensure radius is non-negative
        let ans = (4 / 3) * Math.PI * Math.pow(rad, 3);
        elem2.value = ans.toFixed(4); // Round to four decimal places
    } else {
        elem2.value = 'NaN'; // Output NaN for invalid inputs
    }
}

// Set the form's submit event to call the volume_sphere function
window.onload = function() {
    document.getElementById('MyForm').addEventListener('submit', volume_sphere);
};
