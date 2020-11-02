"use strict";

// const form = document.querySelector('#loan-form');
// form.addEventListener('submit', calculateResult);
document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  console.log('processing...');
  var amount = document.querySelector('#amount');
  var interest = document.querySelector('#interest');
  var years = document.querySelector('#years');
  var monthlyPayment = document.getElementById('monthly-payment');
  var totalPayment = document.getElementById('total-payment');
  var totalInterest = document.getElementById('total-interest');
  var principal = parseFloat(amount.value);
  var calculatedInterest = parseFloat(interest.value) / 100 / 12;
  var calculatedPayments = parseFloat(years.value) * 12; // // Compute monthly payment

  var x = Math.pow(1 + calculatedInterest, calculatedPayments);
  var monthly = principal * x * calculatedInterest / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

function showError(error) {
  // Create a div
  var errorDiv = document.createElement('div'); // Get elements

  var card = document.querySelector('.card');
  var heading = document.querySelector('.heading'); // Add class

  errorDiv.className = 'alert alert-danger'; // Create text node and append to div

  errorDiv.appendChild(document.createTextNode(error)); // Insert error above heading

  card.insertBefore(errorDiv, heading); // Clear error after 3 seconds

  setTimeout(clearError, 3000);
} // Clear error


function clearError() {
  document.querySelector('.alert').remove();
}