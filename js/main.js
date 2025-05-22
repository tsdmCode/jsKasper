const form = document.getElementById('signupform');
const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const noSpecialSignsRegex = new RegExp(/[!@$%^&*(),?":{}|<>]/);

let hasErrors = false;

function submitForm(event) {
  event.preventDefault();
  clearErrors();

  const firstName = event.target.firstname;
  const lastName = event.target.lastname;
  const address = event.target.address;

  if (firstName.value.length < 2) {
    setErrorMessage(firstName, 'Fornavn skal være på mere end et bogstav');
  } else if (noSpecialSignsRegex.test(firstName.value)) {
    setErrorMessage(firstName, 'Dit navn er for mærkeligt, DUDE!');
  }

  if (lastName.value.length < 2) {
    setErrorMessage(lastName, 'Efternavn skal være på mere end et bogstav');
  } else if (noSpecialSignsRegex.test(lastName.value)) {
    setErrorMessage(lastName, 'Dit efternavn er for mærkeligt, DUDE!');
  }

  if (address.value.length < 2) {
    setErrorMessage(address, 'Addresse skal være på mere end et bogstav');
  } else if (noSpecialSignsRegex.test(address.value)) {
    setErrorMessage(firstName, 'Din addresse er for mærkelig, DUDE!');
  }

  if (!hasErrors) {
    alert('Tillykke du har indsent formen');
  }
}

//helper function to create an error message

function setErrorMessage(target, message) {
  hasErrors = true;
  let errorMessage = document.createElement('b');
  errorMessage.classList.add('error');
  errorMessage.innerText = message;
  target.after(errorMessage);
}

function clearErrors() {
  hasErrors = false;
  let errors = document.querySelectorAll('b');
  errors.forEach((el) => {
    el.remove();
  });
}
