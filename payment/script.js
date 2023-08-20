// Your JavaScript code here

// Example: Display an alert on button click
document.getElementById("next-button").addEventListener("click", function () {
  location.href = "payment.html";
});

function processPayment() {
  setTimeout(function () {
    alert("Payment successful! Thank you for your purchase.");
    window.location.href = "index.html"; // Redirect to welcome page
  }, 2000); // Delayed alert for demonstration purposes
}
