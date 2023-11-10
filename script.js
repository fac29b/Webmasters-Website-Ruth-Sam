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


const generate = [];

//END///////////////////////////////////////////////////////////


// contact form label annimation 
const labels = document.querySelectorAll('.input-group label');

labels.forEach(label => {
    // Extract the Font Awesome icon from the label
    const iconHTML = label.querySelector('i') ? label.querySelector('i').outerHTML : '';

    // Apply the transition effect to each letter
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');

    // Wrap the Font Awesome icon in a span and prepend it to the label
    label.innerHTML = `<span style="transition-delay:${labels.length * 50}ms">${iconHTML}</span>` + label.innerHTML;
});

// submit button javascripit 

function sendEmail() {
    // SMTP credentials
    const smtpConfig = {
      Host: "smtp.elasticemail.com",
      Username: "webmastersproject1@gmail.com",
      Password: "96502669B84DE90F9668DD0418DFD0C47805",
    };
  
    Email.send({
      ...smtpConfig,
      To: 'webmastersproject1@gmail.com',
      From: document.getElementById("email").value,
      Subject: "New Contact Form Enquiry",
      Body: `
        Name: ${document.getElementById("name").value}
        <br> Email: ${document.getElementById("email").value}
        <br> Phone: ${document.getElementById("phone").value}
        <br> Message: ${document.getElementById("message").value}
      `,
    }).then(
      message => alert("Message Sent Successfully!")
    ).catch(error => console.error("Error sending email:", error));
  }