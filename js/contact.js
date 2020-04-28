const formOutput = document.querySelector("#contactForm");

formOutput.addEventListener("submit", formValidator);
function formValidator(event) {
  event.preventDefault();

  const fullName = document.querySelector("#fullname");
  const fullNameError = document.querySelector("#fullname-error");

  const fullNameValue = fullName.value;

  if (textValidator(fullNameValue) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");

  const mailValue = email.value;
  if (textValidator(mailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  const emailValidError = document.querySelector("#invalidemail-error");

  if (mailValidator(mailValue) === true) {
    emailValidError.style.display = "none";
  } else {
    emailValidError.style.display = "block";
  }

  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subject-error");

  const subjectValue = subject.value;
  if (subjectValidator(subjectValue) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");

  const messageValue = message.value;
  if (messageValidator(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function textValidator(string) {
  const inputValue = string.trim();
  if (inputValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function mailValidator(mail) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(mail);
}

function subjectValidator(subject) {
  const trimmedSubject = subject.trim();
  if (trimmedSubject.length >= 3) {
    return true;
  } else {
    return false;
  }
}

function messageValidator(message) {
  const trimmedMessage = message.trim();
  if (trimmedMessage.length >= 8) {
    return true;
  } else {
    return false;
  }
}
