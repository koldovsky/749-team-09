(() => {
  const userNameElement = document.querySelector("#user_name");
  const phoneNumberElement = document.querySelector("#phone_number");
  const emailElement = document.querySelector("#email");
  const formDescription = document.querySelector('.contacts__form-description');
  const form = document.querySelector('#form');
  const submitButton = document.querySelector('.contacts__form-input-submit');

  function validateUserName() {
    const regex = /^[a-zA-Z]/;
    const userName = userNameElement.value.trim();
    if (userName.length < 2 || !regex.test(userName)) {
      addInputErrorStyle(userNameElement)
    } else {
      resetInputErrorStyle(userNameElement)
    }
  }

  function validatePhoneNumber() {
    const phoneNumber = phoneNumberElement.value;
    const regex = /^\+?3?8?(0\d{9})$/;
    if (!regex.test(phoneNumber)) {
      addInputErrorStyle(phoneNumberElement)
    } else {
      resetInputErrorStyle(phoneNumberElement)
    }
  }

  function validateEmail() {
    const email = emailElement.value.trim();
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      addInputErrorStyle(emailElement)
    } else {
      resetInputErrorStyle(emailElement)

    }
  }

  async function handleSubmit(event){
    event.preventDefault();
    const response = await fetch(event.target.action,{
      method: form.method,
      body: new FormData(event.target),
      headers: {
        Accept: 'application/json',
      }
    })
    if(response.status !== 200){
      formDescription.innerText = 'Something goes wrong! Please try again in a couple of minutes.';
      formDescription.style.color = 'red';
      form.reset()
    }else{
      formDescription.innerText = 'Thank you for your interest in our proposition!';
      formDescription.style.color = '';
      form.reset()
    }
  }

  function addInputErrorStyle(inputWithFailedValidation){
    inputWithFailedValidation.style.color = "red";
    inputWithFailedValidation.style.border = "1px solid red";
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'gray';
  }
  function resetInputErrorStyle(resetStyleInputWithFailedValidation){
    resetStyleInputWithFailedValidation.style.color = "black";
    resetStyleInputWithFailedValidation.style.border = "";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = '';
  }


  userNameElement.addEventListener("change", validateUserName);
  phoneNumberElement.addEventListener("change", validatePhoneNumber);
  emailElement.addEventListener("change", validateEmail);
  form.addEventListener('submit', handleSubmit);
})();