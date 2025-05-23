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
  const zipcode = event.target.zipcode;
  const country = event.target.country;
  const email = event.target.email;
  const password = event.target.password;
  const passwordRepeat = event.target.passwordRepeat;

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

  if (zipcode.value.length != 4) {
    setErrorMessage(zipcode, '4 cifre, mange tak!');
  }

  if (country.value.length < 3) {
    setErrorMessage(country, 'Landenavne skal være på 3 bogstaver eller mere');
  } else if (noSpecialSignsRegex.test(country.value)) {
    setErrorMessage(country, 'Dit land er for mærkeligt, DUDE!');
  }

  if (!emailRegex.test(email.value)) {
    setErrorMessage(email, 'Indtast en gyldig e-mail!');
  }

  //pw
  if (password.value.length < 6) {
    setErrorMessage(password, 'Password skal være længere end 6');
  }

  if (!noSpecialSignsRegex.test(password.value)) {
    setErrorMessage(password, 'Password skal have mindst en speciel karakter');
  }
  //pwrepeat
  if (password.value !== passwordRepeat.value) {
    setErrorMessage(passwordRepeat, 'Dit password matcher ikke');
  }

  if (!hasErrors) {
    alert('Tillykke du har indsendt formen');
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
