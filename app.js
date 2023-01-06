console.log("app Working");
alert("This page is made only for mobile devices");

// function to show-hide mobile menu

let menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("click", toggleVisible);

function toggleVisible() {
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}

let menuMobile = document.getElementById("mobileMenu");
console.log("menuMobile: " + menuMobile) ;
menuMobile.addEventListener("click", toggleVisible)

// menuAnchor.addEventListener("click" , toggleVisible);



//function para envio de mail

const btn = document.getElementById('submitButton');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_s9re6iq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Thank you!';
   
    }, (err) => {
      btn.value = 'Error :(';
      alert(JSON.stringify(err));
    });
});