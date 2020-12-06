// Shortcuts to DOM Elements.
var finishButtonElement = document.getElementById('FinishButtonId')
var courseNumberInput = document.getElementById('CourseNumberInput')
var signUpButton = document.getElementById('signup-button')
var signUpButton2 = document.getElementById('signup-button2')
var loginButton = document.getElementById('login-button')
var contactUs = document.getElementById("contact-link")
var about = contactUs
//Login and signup button redirect
loginButton.onclick = function () {
  location.href = "html/login.html"
}

signUpButton.onclick = function() {location.href = "html/signup.html"}
signUpButton2.onclick = function() {location.href = "html/signup.html"}

contactUs.onclick = function (){
  location.href = "html/contact_us.html"
}
// Signs-in to Berklinks
function signIn() {
  alert('TODO: Implement Google Sign-In');
  // TODO 1: Sign in Firebase with credential from the Google user.
}

// Signs-out of Berklinks
function signOut() {
  // TODO 2: Sign out of Berklinks.
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // TODO 3: Initialize Firebase.
}

