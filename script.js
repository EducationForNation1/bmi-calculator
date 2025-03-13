function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("result");

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        result.innerHTML = "<span style='color: red;'>Please enter valid values!</span>";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "<span class='underweight'>Underweight</span>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "<span class='normal'>Normal Weight</span>";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "<span class='overweight'>Overweight</span>";
    } else {
        category = "<span class='obese'>Obese</span>";
    }

    result.innerHTML = `Your BMI: <b>${bmi}</b><br>Category: ${category}`;
}
