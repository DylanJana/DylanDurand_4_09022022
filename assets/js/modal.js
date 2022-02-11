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
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
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
        inputError[1].style.border = '2px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        return false
      }
    }
// Je verifie l'email, pour cela j'utilise un regex, je teste la valeur rentrer dans le champs et je renvoie une réponse
    function checkEmail(valueEmail) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(valueEmail)
    }

    function emailVerify () {
      let valueEmail = document.getElementById("email").value
      console.log(valueEmail)
      // Si l'email a passé le test du regex et si elle n'est pas vide, je renvoie true
      if(checkEmail(valueEmail) && valueEmail.length !== "") {
        return true
      // Sinon je renvoie un message d'erreur et ajouter un border rouge à mon input
      } else {
        errorMessage[2].style.display = 'block'
        inputError[2].style.border = '2px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        return false
      }
    }

    firstNameVerify()
    lastNameVerify ()
    emailVerify()
  })
}

validate()