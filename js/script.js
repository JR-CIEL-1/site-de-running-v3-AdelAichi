const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}


// signin

function verifierFormulaire() {
  var password = document.getElementById('password').value;
  if (password.length < 8) {
      document.getElementById('pwd').classList.remove('invisible');
  } else { 
      document.getElementById('pwd').classList.add('invisible');
      alert("Formulaire soumis avec succès!");
  }
}


// signup
// script.js

function verifierFormulaire2() {
  var name = document.getElementById("name").value
  var fname = document.getElementById("firstname").value
  var password = document.getElementById("psswd").value
  var email = document.getElementById("email").value
  var message = document.getElementById("message").value
 

  if (name === "") {
    
    document.getElementById("name").classList.add("error");
  
  }
    
  
    
   else {
    document.getElementById("name").classList.add("valid");
    document.getElementById("name").classList.remove("error");
    
  
  }

  if (fname === "") {
    document.getElementById("firstname").classList.add("error");
    
  } else {
    document.getElementById("firstname").classList.add("valid");
    document.getElementById("firstname").classList.remove("error");
    
  }

  if (password == ''  | password.length < 8) {
    document.getElementById("psswd").classList.add("error");
   
    
  } else {
    document.getElementById("psswd").classList.add("valid");
    document.getElementById("psswd").classList.remove("error");
    
  }

  if (email === "") {
    document.getElementById("email").classList.add("error");
    
  } else {
    document.getElementById("email").classList.add("valid");
    document.getElementById("email").classList.remove("error");
    
  }

  if (message === "") {
    document.getElementById("message").classList.add("error");
    
  } else {
    document.getElementById("message").classList.add("valid");
    document.getElementById("message").classList.remove("error");
    
  }

if (age === "")  {
  document.getElementById("age").classList.add("error");


}else{
  document.getElementById("age").classList.add("valid");
  document.getElementById("age").classList.remove("error");
}



}


