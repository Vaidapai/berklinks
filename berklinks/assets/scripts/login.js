/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Shortcuts to DOM Elements.

var submitButton = document.getElementById('submitButton')
var signUpButton = document.getElementById('signup-button')
var signUpLink = document.getElementById('signup')
var loginButton = document.getElementById('login-button')
var loginButton2 = document.getElementById('login-button2')
var contactUs = document.getElementById("contact-link")
var about = contactUs
var gbutton = document.getElementById("gSignIn")
//Login and signup button redirect


signUpButton.onclick = function() {location.href = "signup.html"}
contactUs.onclick = function (){
  location.href = "contact_us.html"
}
signUpLink.onclick = function(){
  location.href = "signup.html"
}

gbutton.onclick = function () {
  // Sign into Firebase using popup auth & Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

submitButton.onclick = function() {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  })
}

// Signs-out of Friendly Chat.
function signOut() {
  // TODO 2: Sign out of Firebase.
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}
// Saves a new message on the Firebase DB.
function saveMessage(messageText) {
  // TODO 7: Push a new message to Firebase.
}

// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
  // TODO 8: Load and listens for new messages.
}


// Saves the messaging device token to the datastore.
function saveMessagingDeviceToken() {
  // TODO 10: Save the device token in the realtime datastore
}

// Requests permissions to show notifications.
function requestNotificationsPermissions() {
  // TODO 11: Request permissions to send notifications.
}



// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    userPicElement.removeAttribute('hidden');
    signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');

    // We save the Firebase Messaging Device token and enable notifications.
    saveMessagingDeviceToken();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden');
  }
}


// initialize Firebase
initFirebaseAuth();

// TODO: Enable Firebase Performance Monitoring.

// We load currently existing chat messages and listen to new ones.
loadMessages();
