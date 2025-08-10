// toggle-theme saves browser reaload
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; // default is dark
  const html = document.documentElement;
  const icon = document.getElementById("themeIcon");
  html.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
  //________________________________________________
  //  toggle-theme function
   function toggleTheme() {
      const html = document.documentElement;
      const icon = document.getElementById("themeIcon");
      const current = html.getAttribute("data-theme");
      const databaseImg = document.getElementById('database-img');
      const frontendImg = document.getElementById('frontend-img');
      const backendImg = document.getElementById('backend-img');

      if (current === "dark") {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        databaseImg.src = 'img/database-imgLight.png';
        backendImg.src = 'img/backend-imgLight.png';
        frontendImg.src = 'img/frontend-imgLight.png'
      } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        databaseImg.src = 'img/Database-img.jpg';
        backendImg.src = 'img/backend-icon.png';
        frontendImg.src = 'img/Frontend-icon.png'
      }
    }

    document.querySelector(".fa-solid").addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("show");
    });

    // Scroll Function Start --

    const scroll = document.getElementById('scroll');
    scroll.addEventListener('click', ()=>{
      document.getElementById('what-i-do').scrollIntoView({
        behavior: 'smooth'
      })
    })

  // heart-icon click effect

const heartIcon = document.getElementById('heart-icon');
const footerHeartIcon = document.getElementById('footer-heart-icon');

function toggleHeartIcon(icon) {
  icon.classList.toggle('fa-solid');
  icon.style.color = 'red';
}

heartIcon.addEventListener('click', () => toggleHeartIcon(heartIcon));
footerHeartIcon.addEventListener('click', () => toggleHeartIcon(footerHeartIcon));



//   Email validation

const submitButton = document.getElementById('form-submit-btn');
const userName = document.getElementById('userName');
const userNameError = document.getElementById('userNameError');
const userEmailError = document.getElementById('userEmailError');
const email = document.getElementById('userEmail');
const userMsg = document.getElementById('userMsg');
const userMsgError = document.getElementById('userMsgError');

const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/;

submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  const isNameValid = userNameValidation();
  const isEmailValid = emailValidation();
  const isMsgValid = msgValidation();

  if (isNameValid && isEmailValid && isMsgValid) {
    userName.value = '';
    email.value = '';
    userMsg.value = '';

    userName.style.border = '';
    email.style.border = '';
    userMsg.style.border = '';

    showSuccessPopup();
  }
});

userName.addEventListener('input', userNameValidation);
email.addEventListener('input', emailValidation);
userMsg.addEventListener('input', msgValidation);

function userNameValidation() {
  if (userName.value.trim() === '') {
     setTimeout(() => {
         userNameError.textContent = '';
    userName.style.border = '';
      }, 3000);
    userNameError.textContent = 'Name Should be Filled';
    userName.style.border = '2px solid red';
    return false;
  } else if (specialCharPattern.test(userName.value)) {
    userNameError.textContent = 'Special characters are not allowed';
    userName.style.border = '2px solid red';
     setTimeout(() => {
         userNameError.textContent = '';
    userName.style.border = '';
      }, 3000);
    return false;
  } else {
    userNameError.textContent = '';
    userName.style.border = '2px solid green';
    return true;
  }
}

function emailValidation() {
  if (email.value.trim() === '') {
    userEmailError.textContent = 'Email Should be Filled';
    email.style.border = '2px solid red';
     setTimeout(() => {
         userEmailError.textContent = '';
    email.style.border = '';
      }, 3000);
    return false;
  } else if (!emailPattern.test(email.value.trim())) {
    userEmailError.textContent = 'Enter a Valid Email';
    email.style.border = '2px solid red';
       setTimeout(() => {
         userEmailError.textContent = '';
    email.style.border = '';
      }, 3000);
    return false;
  } else {
    userEmailError.textContent = '';
    email.style.border = '2px solid green';
    return true;
  }
}

function msgValidation() {
  if (userMsg.value.trim() === '') {
    userMsgError.textContent = 'Add a Message';
    userMsg.style.border = '2px solid red';
     setTimeout(() => {
         userMsgError.textContent = '';
    userMsg.style.border = '';
      }, 3000);
    return false;
  } else {
    userMsgError.textContent = '';
    userMsg.style.border = '2px solid green';
    return true;
  }
}

function showSuccessPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}
// Select elements
// JS

