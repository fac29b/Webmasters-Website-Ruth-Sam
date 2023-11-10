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
