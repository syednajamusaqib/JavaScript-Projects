const form = document.querySelector("form");

document.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  // Input Validation
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter Valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter Valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi} kg/m^2</span>`;
    
    // Displaying BMI results

    if (bmi < 18.6) {
      result.innerHTML = `${bmi} kg/m^2 Ooh You are Under Weight`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `${bmi} kg/m^2 Wow! You seem to be fit`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `${bmi} kg/m^2 Ooh! You are Overweight`;
    }
  }
});
