(() => {
  const userNameElement = document.querySelector("#user_name");
  const phoneNumberElement = document.querySelector("#phone_number");
  const emailElement = document.querySelector("#email");

  function validateUserName() {
    const regex = /^[a-zA-Z]/;
    const userName = userNameElement.value.trim();
    if (userName.length < 2 || !regex.test(userName)) {
      userNameElement.style.border = "1px solid red";
    } else {
      userNameElement.style.color = "black";
      userNameElement.style.border = "";
    }
  }

  function validatePhoneNumber() {
    const phoneNumber = phoneNumberElement.value;
    const regex = /^\+?3?8?(0\d{9})$/;
    if (!regex.test(phoneNumber)) {
      phoneNumberElement.style.color = "red";
      phoneNumberElement.style.border = "1px solid red";
    } else {
      phoneNumberElement.style.color = "black";
      phoneNumberElement.style.border = "";
    }
  }

  function validateEmail() {
    const email = emailElement.value.trim();
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      emailElement.style.color = "red";
      emailElement.style.border = "1px solid red";
    } else {
      emailElement.style.color = "black";
      emailElement.style.border = "";
    }
  }

  userNameElement.addEventListener("change", validateUserName);
  phoneNumberElement.addEventListener("change", validatePhoneNumber);
  emailElement.addEventListener("change", validateEmail);
})();