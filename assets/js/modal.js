function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
//const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* Close modal click on cross */
let btnCloseModal = document.querySelector('.close')
let closeModal = function () {
  btnCloseModal.addEventListener('click', function() {
    modalbg.style.display = "none"
  })
}()

let form = document.reserve
let errorMessage = document.querySelectorAll('.error-message')
let inputError = document.querySelectorAll('input')
console.log(inputError)

function validate() {
  form.addEventListener("submit", function(e) {
    function firstNameVerify () {
      if(form.firstname.value != "" && form.firstname.value.length >= 2) {
        return true
      } else {
        errorMessage[0].style.display = 'block'
        inputError[0].style.border = '1px solid red'
        e.preventDefault()
        return false
      }
    }

    function lastNameVerify () {
      if(form.lastname.value != "" && form.lastname.value.length >= 2) {
        console.log('felicitations')
        return true
      } else {
        let errorMessage = document.querySelectorAll('.error-message')
        errorMessage[1].style.display = 'block'
        inputError[1].style.border = '1px solid red'
        e.preventDefault()
        return false
      }
    }

    firstNameVerify()
    lastNameVerify ()
  })
}

validate()