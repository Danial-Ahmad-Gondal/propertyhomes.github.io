/*Java script hai pata ni kam karta hai yaa nai*/
// Check if the animation has been shown before
/*Pata nai batao kia kaam ya nai*/
const header = document.getElementById('navbar');
const begin = document.querySelector('.begin');

window.addEventListener('scroll', () => {
    const beginTop = begin.getBoundingClientRect().top;

    // Adjust this value based on the height of the begin section (95vh)
    const scrollThreshold = -500; // Example: for 95vh height

    if (beginTop < scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
//Java script code of CHATGPT starts here//
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Function to show the popup
function showPopup() {
    popup.style.display = 'block';
}

// Show the popup after a delay (e.g., 3000 milliseconds or 3 seconds)
window.onload = function () {
    setTimeout(showPopup, 3000);
};

// Close the popup when the close button is clicked
closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Close the popup when clicking outside the form
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Prevent the form from closing the popup
document.getElementById('popup-form').addEventListener('click', function (event) {
    event.stopPropagation();
});

//AND ENDS HERE//
//now the box field starts here//
// Get references to the buttons and the input fields//
// Get references to the buttons and the box
const forSaleButton = document.getElementById('for-sale-button');
const forRentButton = document.getElementById('for-rent-button');
const box = document.querySelector('.begin > .father > .box');

// Add click event listeners to the buttons
forSaleButton.addEventListener('click', reloadBox);
forRentButton.addEventListener('click', reloadBox);

function reloadBox() {
    // Hide the box (make it disappear)
    box.style.display = 'none';

    // Use a small delay to create the effect of "reloading"
    setTimeout(() => {
        // Show the box again (make it reappear)
        box.style.display = 'block';
    }, 200); // You can adjust the delay duration to control the effect's speed
}


//chat gpt codee of slider//
const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const list = document.getElementById('list');

menuIcon.addEventListener("click", () => {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    list.style.display = 'block';
});

closeIcon.addEventListener("click", () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    list.style.display = 'none';
});

window.addEventListener("load", function() {
    // This code will run when the entire page, including all resources, is loaded.
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loading-screen").style.display = "none";
        // Show the website content
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust the timeout duration as needed
});


document.addEventListener("DOMContentLoaded", function() {
    // Find the scroll button element
    const scrollButton = document.getElementById('scroll-button');

    // Find the target section element
    const targetSection = document.querySelector('.begin-1');

    // Add a click event listener to the scroll button
    scrollButton.addEventListener('click', function() {
        // Scroll to the target section when the button is clicked
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});



document.getElementById('scroll-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get user selections and inputs
    var selectedPropertyType = document.getElementById('select-property');
    var selectedPropertyTypeText = selectedPropertyType.options[selectedPropertyType.selectedIndex].text;
  
    var location = document.getElementById('pata').value;
  
    var selectedBedrooms = document.getElementById('bedrooms');
    var selectedBedroomsText = selectedBedrooms.options[selectedBedrooms.selectedIndex].text;
  
    var maxPrice = document.getElementById('price').value;
    var currency = document.getElementById('currency').value;
    if (!selectedPropertyType || !location || !selectedBedrooms || !maxPrice || !currency) {
        alert('Please fill in all the fields.');
        return;
      }
    // Create a message based on user selections
    var message = "You have selected the following:\n\n" +
    "Property Type: " + selectedPropertyTypeText + "\n\n" +
    "Location: " + location + "\n\n" +
    "Bedrooms: " + selectedBedroomsText + "\n\n" +
    "Max Price: " + maxPrice + " " + currency + "\n\n" +
    "Your request has been submitted. Our client will contact you soon.";
    
    
    
    
                  // Display the message in the modal
    var modal = document.getElementById('myModal');
    var popupContent = document.getElementById('popupContent');
    popupContent.textContent = message;
    modal.style.display = 'block';
  



    var submitPopup = document.getElementById('submitPopup');
    submitPopup.addEventListener('click', function() {
      modal.style.display = 'none';
      alert('Credentials saved successfully');
    });


    // Get the country code and phone number elements
var countryCode = document.getElementById('country-code');
var phoneNumber = document.getElementById('phone-number');

// Add an event listener to the country code dropdown
countryCode.addEventListener('change', function() {
  // Get the selected country code
  var selectedCountryCode = countryCode.value;

  // Update the phone number input's placeholder with the selected country code
  phoneNumber.placeholder = 'Your Phone Number (' + selectedCountryCode + ')';
});

















    // Close the modal when the close button is clicked
    var closeModal = document.getElementById('closeModal');
    closeModal.onclick = function() {
      modal.style.display = 'none';
    }
  
    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });
  