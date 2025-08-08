document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const gender = document.querySelector("input[name='gender']:checked");

  const errorDiv = document.getElementById("error");
  errorDiv.textContent = "";

  // Basic Validation
  if (!name || !email || !phone || !course || !gender) {
    errorDiv.textContent = "All fields are required.";
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    errorDiv.textContent = "Phone number must be 10 digits.";
    return;
  }

  // Create JSON
  const studentData = {
    name: name,
    email: email,
    phone: phone,
    course: course,
    gender: gender.value
  };

  // Display Output
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h5 class="text-success">Registration Successful!</h5>
    <strong>Submitted Data (JSON Format):</strong>
    <pre>${JSON.stringify(studentData, null, 2)}</pre>
  `;
});
