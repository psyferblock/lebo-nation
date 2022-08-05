


const validateForm = (form) => {

    let sendError = {};

    const { name, last, phone, address, email, password, confirmPassword } =
      form;

    // console.log("form = ", form);

    if (!isRequired(name)) {
      sendError.name = "name is required";
    }
    if (!isRequired(last)) {
      sendError.last = "last is required";
    }
    if (!isRequired(phone)) {
      sendError.phone = "phone is required";
    }
    if (!isRequired(address)) {
      sendError.address = "address is required";
    }
    if (!isRequired(email)) {
      sendError.email = "email is required";
    } else if (!isEmailValid(email)) {
      sendError.email = "email is invalid ";
    }

    if (!isRequired(password)) {
      sendError.password = "password is required";
    } else if (!isPasswordSecure(password)) {
      sendError.password =
        "Your password must contain at least 1 big letter, 1 small letter, 1 number, and special character";
    }

    if (!isRequired(confirmPassword)) {
      sendError.confirmPassword = "Please enter the password again";
    } else if (!confirmPass(password, confirmPassword)) {
      sendError.confirmPassword = "Confirm password does not match";
    }

    // console.log(sendError)
    if (Object.keys(sendError).length !== 0) {
      return sendError;
    } else {
      return true;
    }
  };





  const isRequired = (value) => {
    return value.length ? true : false;
  };

  function isEmailValid(email) {
    // this comment is added to prevent react from adding warnings to the regular expression
    //eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function isPasswordSecure(password) {
    //eslint-disable-next-line
    let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
    return regex.test(password);
  }

  function confirmPass(pass1, pass2) {
    return pass1 === pass2;
  }


export default validateForm;