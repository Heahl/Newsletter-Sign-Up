// Get the form and success message elements
const newsletterForm = document.getElementById("newsletter-form");
const successMessage = document.getElementById("modal-container");
const confirmedEmail = document.getElementById("confirmed-email");

// Submit event handler for the form
if (newsletterForm) {
newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the email input value
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (validateEmail(email)) {
    // Display success message
    displaySuccessMessage(email); 
    console.log(validatedMail);// Call the function to show the success message
  } else {
    // Show email validation error
    emailInput.setCustomValidity("Please enter a valid email address.");
  }
});

// Function to display the success message
function displaySuccessMessage(email) {
  // Set the confirmed email in the success message
  confirmedEmail.textContent = email;
  // Show the modal container 
  document.getElementById("modal-container").style.display = "flex";
  console.log("displaysuccesmessage");
}

// Function to validate email using regex
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
  console.log("validated");
}

// Dismiss success message
function dismissMessage() {
  successMessage.style.display = "none";
  console.log("dismissed");
}}  
