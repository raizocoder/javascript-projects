function CalculateBmi() {
  const height = document.getElementById("heightBox").value;
  const weight = document.getElementById("weightBox").value;
  const result = document.getElementById("result");
  if (!height || isNaN(height) || height < 0) {
    result.innerText = "please provide a valid height";
    return;
  } else if (!weight || isNaN(weight) || weight < 0) {
    result.innerText = "please provide a valid weight";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.5) {
    result.innerText = `Under weight: Your bmi ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.innerText = `Normal: Your bmi ${bmi}`;
  } else if (bmi >= 25 && bmi < 29.9) {
    result.innerText = `Overweight: Your bmi ${bmi}`;
  } else if (bmi >= 30 && bmi < 34.9) {
    result.innerText = `Obesity(class 1): Your bmi ${bmi}`;
  } else if (bmi >= 35.5 && bmi < 39.9) {
    result.innerText = `Obesity(class 2): Your bmi ${bmi}`;
  } else {
    result.innerText = `Extreme Obesity ${bmi}`;
  }
}
