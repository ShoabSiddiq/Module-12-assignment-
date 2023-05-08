document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var weight = parseFloat(document.getElementById('weightInput').value);
    var height = parseFloat(document.getElementById('heightInput').value) / 100; // Convert height from cm to meters
  
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to two decimal places
  
    document.getElementById('result').textContent = 'Your BMI is: ' + bmi;
  });
  