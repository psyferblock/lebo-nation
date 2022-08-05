import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// this component is copied from Material UI components
import Footer from "./footer";
import { post } from "../../api/index";


const theme = createTheme();

const Register = () => {


  const initialValues = {
    name: "",
    last: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // const [userDetails, setUserDetails] = useState(initialValues);
  const [missingFields, setmissingFields] = useState(null);





  const handleSubmit = (event) => {
    event.preventDefault(); // to prevent  refreshing the page, and loosing all the fetched data 
    
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      last: data.get("last"),
      phone: data.get("phone"),
      address: data.get("address"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });

    const validatedForm = validateInput(data);
    if( !validatedForm) {
      setmissingFields(validatedForm)
    } else
      post(`${process.env.API_URL}`, data);


  };



  const validateInput = (form) => {
    
  let sendError = {};

  const name = form.name;
  const last = form.last;
  const phone = form.phone;
  const address = form.address;
  const email = form.email;
  const password = form.password;
  const confirmPassword = form.confirmPassword;
  // console.log(req.form);

  if (name && !isRequired(name)) {
    sendError.name = "name is required";
  }

  if (last && !isRequired(last)) {
    sendError.last = "last is required";
  }

  if (phone && !isRequired(phone)) {
    sendError.phone = "phone is required";
  }

  if (address && !isRequired(address)) {
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
    sendError.password = "at least 1 big letter, 1 small letter, and 1 number";
  }

  if (confirmPassword && !isRequired(confirmPassword)) {
    sendError.confirmPassword = "Please enter the password again";
  } else if (!confirmPass(password, confirmPassword)) {
    sendError.confirmPassword = "Confirm password does not match";
  }


  if (Object.keys(sendError).length !== 0) {

      setmissingFields(sendError)
  } else return true


  }

    const isRequired = (value) => {
      return !value.toString().trim().length ? "require" : true;
    };

    function isEmailValid(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function isPasswordSecure(password) {
      let regex =
        /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
      return regex.test(password);
    }

    function confirmPass(pass1, pass2 ){
	    return pass1.value.trim() === pass2.value.trim();
    }


  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                />
                <small className="text-red-500">{missingFields ? missingFields.name : ""}</small>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Your Email "
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Your Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-confirmPassword"
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/user/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
