import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import validateForm from "../../validations/formValidator";
import { sendUser } from "../../api/axios";


const theme = createTheme();

const Register = () => {
    let navigate = useNavigate();

  // use State is used to store inf like variables, it takes initial value. And REact react listens for every change it re-rendres the component
  const [missingFields, setmissingFields] = useState(null);



  const handleSubmit = async (event) => {
    event.preventDefault(); // to prevent  refreshing the page, and loosing all the fetched data

    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("name"),
      last: data.get("last"),
      phone: data.get("phone"),
      address: data.get("address"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    // first validate user's input for missing fields or invalid inputs before sending to te server
    const checkInputErrors = validateForm(formData);

    if (checkInputErrors) {
      setmissingFields(checkInputErrors);
    } else {
      setmissingFields(null);
      // if fields are validated, we can post a request to the server
      const registerResponse = await sendUser("/user/register", formData);
      // console.log(registerResponse)
      if (registerResponse.authenticated) {
        navigate(`/`);
      } else {
        setmissingFields({
          confirmPassword: registerResponse.message,
        });
      }

    }
  };



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
                <small className="block text-red-500">
                  {missingFields && missingFields.name
                    ? `${missingFields.name}`
                    : ""}
                </small>
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
                <small className="block text-red-500">
                  {missingFields && missingFields.last
                    ? `${missingFields.last}`
                    : ""}
                </small>
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
                <small className="block text-red-500">
                  {missingFields && missingFields.phone
                    ? `${missingFields.phone}`
                    : ""}
                </small>
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
                <small className="block text-red-500">
                  {missingFields && missingFields.address
                    ? `${missingFields.address}`
                    : ""}
                </small>
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
                <small className="block text-red-500">
                  {missingFields && missingFields.email
                    ? `${missingFields.email}`
                    : ""}
                </small>
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
                <small className="block text-red-500">
                  {missingFields && missingFields.password
                    ? `${missingFields.password}`
                    : ""}
                </small>
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
                <small className="block text-center text-red-500">
                  {missingFields && missingFields.confirmPassword
                    ? `${missingFields.confirmPassword}`
                    : ""}
                </small>
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
};;

export default Register;
