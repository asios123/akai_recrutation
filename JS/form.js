document.getElementById("formularz").addEventListener("submit", function (event) {
  
  var firstNameField = document.getElementById("First name");
  var firstNameError = document.getElementById("First name-error");
  var lastNameField = document.getElementById("Last name");
  var lastNameError = document.getElementById("Last name-error");
  var phoneNumberField = document.getElementById("Phone number");
  var phoneNumberError = document.getElementById("Phone number-error");
  var emailField = document.getElementById("e-mail");
  var emailError = document.getElementById("e-mail-error")
  var universityField = document.getElementById("university");
  var universityError = document.getElementById("university-error");
  var othersField = document.querySelector(".grid-item + input");
  var sectionCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  var sectionError = document.getElementById("section-error");
  

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  phoneNumberError.textContent = "";
  universityError.textContent = "";
  sectionError.textContent = "";
  
  if (firstNameField.value === "") {
    firstNameField.style.border = "2px solid red";
    firstNameError.textContent = "This field is required";
    event.preventDefault();
  }  else {
    var validationResult = validateFirstName(firstNameField.value);
    if (validationResult === "Incorrect data") {
      firstNameField.style.border = "2px solid red";
      firstNameError.textContent = "Incorrect data";
      event.preventDefault();
    }
  }

  if (lastNameField.value === "") {
    lastNameField.style.border = "2px solid red";
    lastNameError.textContent = "This field is required";
    event.preventDefault();
  }

  if (emailField.value === "") {
    emailField.style.border = "2px solid red";
    emailError.textContent = "This field is required";
    event.preventDefault();
  }
  
  if (phoneNumberField.value === "") {
    phoneNumberField.style.border = "2px solid red";
    phoneNumberError.textContent = "This field is required";
    event.preventDefault();
  } else {
    
    if (!validatePhoneNumber(phoneNumberField.value)) {
      phoneNumberField.style.border = "2px solid red";
      phoneNumberError.textContent = "Invalid phone number";
      event.preventDefault();
    }
  }
  if (universityField.selectedIndex >= 0 || othersField.value !== "") {
    
  } else {
    universityField.style.border = "2px solid red";
    universityError.textContent = "This field is required";
    event.preventDefault();
  }

  var atLeastOneChecked = false;
  sectionCheckboxes.forEach(function (checkbox) {
    
    if (checkbox.checked) {
      atLeastOneChecked = true;
    }
  });

  if (!atLeastOneChecked) {
    sectionCheckboxes.forEach(function (checkbox) {
        checkbox.style.border = "2px solid red";
    });
    
    sectionError.textContent = "Please choose at least one";
    event.preventDefault();
}

});

function isFirstLetterCapital(firstName) {
  if (/^[A-Z]/.test(firstName)) {
    return true;
  }
  return false;
}
function validateFirstName(firstName) {
 if (isFirstLetterCapital(firstName)) {
  return "Correct";
 } else{
  return "Incorrect data";
 }
}

function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
  return re.test(input_str);
}

document.addEventListener("DOMContentLoaded", function() {
  
  var firstNameField = document.getElementById("First name");
  var lastNameField = document.getElementById("Last name");
  var emailField = document.getElementById("e-mail");
  var phoneNumberField = document.getElementById("Phone number");
  var universityField = document.getElementById("university");
  var othersField = document.querySelector(".grid-item + input");
  var experienceField = document.getElementById("experience");

  
  firstNameField.value = "";
  lastNameField.value = "";
  emailField.value = "";
  phoneNumberField.value = "";
  universityField.value = "";
  othersField.value = "";
  experienceField.value = "";
  
});





