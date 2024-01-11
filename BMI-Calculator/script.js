document.getElementById("bmiForm").addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Check if all required inputs are filled
    if (gender && !isNaN(age) && !isNaN(heightFeet) && !isNaN(heightInches) && !isNaN(weight) && age > 0 && heightFeet >= 0 && heightInches >= 0 && weight >= 0) {
        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254; // height in meters
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById('result');

        // logic for the categories of bmi calculation
        let category = '';
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal Weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        let resultMessage = `Your BMI ${bmi.toFixed(2)}\n`;
        resultMessage += `Category: ${category}`;

        resultElement.innerText = resultMessage;
    }
});
