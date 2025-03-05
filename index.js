/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/

// Step 1: Select the theme button

// Step 2: Write the callback function
const toggleDarkMode = () => {
  // Write your code here
  // This section will run whenever the button is clicked
};

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function

/*** Form Handling [PLACEHOLDER] ***/
/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/

/*** Form Handling ***
  Purpose:
  - When the user submits the form, the name and state they
    entered should be added to the list of participants.
***/

// Step 1: Add your query for the submit RSVP button here
let participantButton = document.getElementById("connect-button");

const addParticipant = (event) => {
  // Step 2: Write your code to manipulate the DOM here
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let state = document.getElementById("state").value;
  event.preventDefault();
};

// Step 3: Add a click event listener to the submit RSVP button here
