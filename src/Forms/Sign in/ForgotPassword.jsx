import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/forms.css";

import logo from "../../assets/logo.png";
import SignInImg from "../../assets/SignInImg.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    height: "100%",
  },
  wrapper: {
    padding: "0 69px",

    [theme.breakpoints.down("md")]: {
      padding: "0 40px",
    },
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  formLeftSide: {
    display: "flex",
    backgroundImage: `url(${SignInImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  formRightSide: {
    marginTop: "52px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  navLink: {
    color: "#5D5D5D",
    textDecoration: "none",
    marginRight: "16px",
  },
  loginButton: {
    borderRadius: "18px",

    "&:hover": {
      borderColor: "#0078D3 !important",
    },
  },
  backToSignIn: {
    padding: "10px 32px",
  },
  loginButtonText: {
    fontWeight: "bold",
  },
  logo: {
    width: "85px",
    marginBottom: "32px",
  },
  header: {
    color: "#181818",
    marginBottom: "16px",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  inputLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "500",
    marginBottom: "4px",
    color: "#5c5c5d",
    width: "100%",
  },
  inputField: {
    "& input": {
      height: "0",
    },
    "& .MuiInputBase-root": {
      marginBottom: "16px",
      fontSize: "14px",
      color: "#000",
      height: "33px",
    },
  },
  checkbox: {
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
  checkboxLabel: {
    color: "#5c5c5d",
    fontSize: "12px",
    fontWeight: "500",
  },
  forgotPassword: {
    fontSize: "12px",
    textDecoration: "none",
    color: "#5c5c5d",
    flexGrow: "1",
    textAlign: "end",
  },
}));

function ForgotPassword() {
  const classes = useStyles();

  return (
    <Grid container className={classes.formContainer}>
      <Grid item md={8} xs={0} className={classes.formLeftSide}></Grid>
      <Grid className={classes.formRightSide} item md={4} xs={12}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginTop="127px"
          marginBottom="20px"
        >
          <div>
            <img src={logo} alt="company logo" className={classes.logo} />
          </div>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            width={1}
            style={{ padding: "0 69px", boxSizing: "border-box" }}
          >
            <Typography variant="h1" className={classes.header}>
              Forgot Password?
            </Typography>
            <Typography
              variant="h4"
              style={{
                textAlign: "center",
                color: "#4c4d4c",
                fontWeight: "400",
              }}
            >
              Enter your email address below and we'll get you back on track.
            </Typography>
          </Box>
        </Box>
        <Box
          width={1}
          className={classes.wrapper}
          style={{ boxSizing: "border-box" }}
          marginTop="32px"
        >
          <InputLabel className={classes.inputLabel}>
            <MailOutlineIcon style={{ fontSize: "16px", marginRight: "6px" }} />
            Email
          </InputLabel>
          <TextField
            fullWidth
            id="email"
            type="email"
            variant="outlined"
            classes={{ root: classes.inputField }}
          />
        </Box>

        <Box
          width={1}
          style={{ boxSizing: "border-box" }}
          className={classes.wrapper}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/resetpassword"
            style={{ padding: "8px" }}
          >
            Send Reset Link
          </Button>
        </Box>
        <Box marginTop="175px">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.loginButton}
            classes={{ root: classes.backToSignIn }}
            component={Link}
            to="/signin"
          >
            <Typography
              variant="h4"
              color="primary"
              className={classes.loginButtonText}
            >
              Back to Sign In
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;
