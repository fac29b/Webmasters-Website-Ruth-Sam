// Burger/Mobile Nav Bar Functionality
const navElement = document.querySelector('.nav')
const hambergerElement = document.querySelector('.hamburger')


hambergerElement.addEventListener('click', ()=>{
    navElement.classList.toggle('nav-open')
    hambergerElement.classList.toggle('hamburger-open')
})


navElement.addEventListener('click', ()=>{
    navElement.classList.remove('nav-open')
    hambergerElement.classList.remove('hamburger-open')
    
})
// End ///////////////////////////////////////////////////////
///////////////////////SOCIAL MEDIA ICONS////////////////////////////////////
const shareURL = 'https://fac29b.github.io/Project1Sam-Ruth/';
const shareTitle = 'Project Website';

function shareOnLinkedIn(){
    const linkedinURL = 'https://www.linkedin.com/in/samhill90/';
    window.open(linkedinURL, '_blank');
}

function shareOnTwitter(){
    const twitterURL = 'https://twitter.com/?lang=en';
    window.open(twitterURL, '_blank');
}

function shareOnFacebook(){
    const facebookURL = 'https://www.facebook.com/';
    window.open(facebookURL, '_blank');
}

document.getElementById('linkedin').addEventListener('click', shareOnLinkedIn);
document.getElementById('twitter').addEventListener('click', shareOnTwitter);
document.getElementById('facebook').addEventListener('click', shareOnFacebook);
//END ////////////////////////////////////////////////////////
///////////////////////SUBMIT BUTTON/////////////////////////////////////////
const submitElement = document.querySelector('.submit')

// END ///////////////////////////////////////////////////////

////////////////////OUR TEAM ANIMATION////////////////////////////////////////

// END ///////////////////////////////////////////////////////


/////////////////BACKGROUND IMAGE ANIMATIONS//////////////////////////////////

const backgroundContainer = document.querySelector('.home');
const backgroundContainer2 = document.querySelector('.ourteam');
const backgroundContainer3 = document.querySelector('.portfolio');

let xPos = 0;
let speed = 0.2; // Adjust speed (lower value for slower speed)
let frame;

function moveBackground() {
    xPos -= speed;
    backgroundContainer.style.backgroundPosition = `${xPos}px 0`;
    backgroundContainer2.style.backgroundPosition = `${xPos}px 0`;
    backgroundContainer3.style.backgroundPosition = `${xPos}px 0`;

    if (xPos <= -window.innerWidth) {
        xPos = 0;
    }

    frame = requestAnimationFrame(moveBackground);
}

function startAnimation() {
    frame = requestAnimationFrame(moveBackground);
}

function stopAnimation() { 
    cancelAnimationFrame(frame);
}

startAnimation();




//END///////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form and the submit message div
    var emailForm = document.getElementById('emailForm');
    var submitMessage = document.getElementById('submitMessage');
  
    // Add a submit event listener to the form
    emailForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Toggle visibility using CSS classes
      emailForm.classList.add('hidden');
      submitMessage.classList.remove('hidden');
  
      // Reset the form after 3 seconds
      setTimeout(function () {
        emailForm.classList.remove('hidden');
        submitMessage.classList.add('hidden');
        // You may also want to reset the form fields if needed
        emailForm.reset();
      }, 3000);
    });
  });
