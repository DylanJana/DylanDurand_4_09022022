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
const formData = document.querySelectorAll(".formData");

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

// Cette fonction est une fonction globale qui regroupe toutes les fonctions de vérifications des champs du formulaire
function validate() {
  // Lorsque je soumets le formulaire, la fonction de callback se lance
  form.addEventListener("submit", function(e) {
    // Je verifie le champ #lastname, cette fonction renvoie true si la valeur de #lastname n'est pas vide
    // Et que la valeur de ce champ est supérieur ou égal à 2 caractères
    function firstNameVerify () {
      if(form.firstname.value != "" && form.firstname.value.length >= 2) {
        errorMessage[0].style.display = 'none'
        inputError[0].style.border = '0.8px solid #ccc'
        return true
      } else {
        errorMessage[0].style.display = 'block'
        inputError[0].style.border = '1px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
        return false
      }
    }
    // Je verifie le champ #lastname, cette fonction renvoie true si la valeur de #lastname n'est pas vide
    // Et que la valeur de ce champ est supérieur ou égal à 2 caractères
    function lastNameVerify () {
      if(form.lastname.value != "" && form.lastname.value.length >= 2) {
        errorMessage[1].style.display = 'none'
        inputError[1].style.border = '0.8px solid #ccc'
        return true
      } else {
        errorMessage[1].style.display = 'block'
        inputError[1].style.border = '2px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
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
      // Si l'email a passé le test du regex et si elle n'est pas vide, je renvoie true
      if(checkEmail(valueEmail) && valueEmail.length !== "") {
        errorMessage[2].style.display = 'none'
        inputError[2].style.border = '0.8px solid #ccc'
        return true
      // Sinon je renvoie un message d'erreur et ajouter un border rouge à mon input
      } else {
        errorMessage[2].style.display = 'block'
        inputError[2].style.border = '2px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
        return false
      }
    }

    // Je vérifie la date d'anniversaire de la personne qui souhaite s'inscrire
    function birthDateVerify () {
      let birthDateValue = document.getElementById("birthdate").value
      // Si la date d'anniversaire est renseignée je retourne true
      if(birthDateValue) {
        errorMessage[3].style.display = 'none'
        inputError[3].style.border = '0.8px solid #ccc'
        return true
        // Sinon j'affiche un message d'erreur et change le design de l'input
      } else {
        errorMessage[3].style.display = 'block'
        inputError[3].style.border = '2px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
        return false
      }
    }

    // Je verifie que l'utilisateur indique un nombre dans ce champs
    function numberOfContribution () {
      // Je récupére la valeur du champ ayant comme ID quantity
      let participations = document.getElementById("quantity").value
      // Si la valeur du champ ayant l'ID quantity est un nombre et il est valide alors je renvoie true
      if (!isNaN(participations) && participations) {
        errorMessage[4].style.display = 'none'
        inputError[4].style.border = '0.8px solid #ccc'
        return true
        // Sinon je fais apparaître le message d'erreur et redesign l'input
      } else {
        errorMessage[4].style.display = 'block'
        inputError[4].style.border = '2px solid red'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
        return false
      }
    }

    // Je verifie que l'utilisateur a bien choisi le tournoi auquel il veut participer
    function tournamentChoice () {
      // Si l'une des options est choisie alors renvoi true
      if(document.getElementById('location1').checked || 
      document.getElementById('location2').checked ||
      document.getElementById('location3').checked ||
      document.getElementById('location4').checked ||
      document.getElementById('location5').checked ||
      document.getElementById('location6').checked) {
        errorMessage[5].style.display = 'none'
        return true
        // Sinon je fais apparaître le message d'erreur et renvoie false
      } else {
        errorMessage[5].style.display = 'block'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
        return false
      }
    }

    function checkBoxLegalVerify () {
      let checkBox = document.querySelector('.checkbox2-label .checkbox-icon')
      if(document.getElementById('checkbox1').checked) {
        checkBox.style.border = "1px solid transparent"
        errorMessage[6].style.display = 'none'
        return true
      } else {
        checkBox.style.border = "2px solid red"
        errorMessage[6].style.display = 'block'
        e.preventDefault() // J'arrête le comportement par defaut du bouton submit
        validate() // Suite à mon erreur je relance la fonction, pour permettre une nouvelle saisie
        return false
      }
    }

    firstNameVerify()
    lastNameVerify ()
    emailVerify()
    birthDateVerify()
    numberOfContribution()
    tournamentChoice()
    checkBoxLegalVerify()
  })
}

validate()