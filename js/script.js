function convert(conversionType, value) {
    // Convert value to a number
    value = parseFloat(value);
    let result = 0;

    // Perform the conversion based on the conversionType
    if (conversionType === "kg_to_lb") {
        // Kilograms to Pounds conversion
        result = value * 2.20462;
        document.getElementById("result").innerText = result.toFixed(2) + " pounds";
    } else if (conversionType === "lb_to_kg") {
        // Pounds to Kilograms conversion
        result = value * 0.453592;
        document.getElementById("result").innerText = result.toFixed(2) + " kilograms";
    }
}
