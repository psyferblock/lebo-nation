import * as React from "react";
import { useState } from "react";
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
// from Material ui components
import { useNavigate } from "react-router-dom";
import validateForm from "../../validations/formValidator";
import Footer from "./footer";
import { sendUser } from "../../api/axios"


const theme = createTheme();

const LogIn = () => {
    let navigate = useNavigate();

const [missingFields, setmissingFields] = useState(null);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = ({
      email: data.get("email"),
      password: data.get("password"),
    });

      // first validate user's input for missing fields or invalid inputs before sending to te server
    const checkInputErrors = validateForm(formData);
    // console.log(checkInputErrors);
    if (checkInputErrors) {
      setmissingFields(checkInputErrors);
    } else {
      setmissingFields(null);
    //   // if fields are validated, we can post a request to the server
      const registerResponse = await sendUser("/user/login", formData);
      // console.log(registerResponse)
      if (registerResponse.authenticated) {
        navigate(`/`);
      } else {
        setmissingFields({
          password: registerResponse.message,
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
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  autoFocus
                />
                <small className="block text-red-500">
                  {missingFields && missingFields.email
                    ? `${missingFields.email}`
                    : ""}
                </small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                />
                <small className="block text-red-500">
                  {missingFields && missingFields.password
                    ? `${missingFields.password}`
                    : ""}
                </small>
              </Grid>
            </Grid>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/user/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default LogIn;