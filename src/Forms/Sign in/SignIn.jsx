import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  InputLabel,
  TextField,
} from "@material-ui/core";
import SignInImg from "../../assets/SignInImg.png";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../../styles/forms.css";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    minHeight: "100%",
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
  wrapper: {
    padding: "0 69px",

    [theme.breakpoints.down("md")]: {
      padding: "0 40px",
    },
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <Grid container className={classes.formContainer}>
      <Grid item md={8} xs={0} className={classes.formLeftSide}></Grid>
      <Grid className={classes.formRightSide} item xs={12} md={4}>
        <Box>
          <Typography
            variant="h4"
            color="primary"
            component={Link}
            to="/"
            className={classes.navLink}
          >
            Don’t have an account?
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.loginButton}
            component={Link}
            to="/"
          >
            <Typography
              variant="h4"
              color="primary"
              className={classes.loginButtonText}
            >
              Get Started
            </Typography>
          </Button>
        </Box>
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
          <Box display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h1" className={classes.header}>
              Sign In to Cloud Menu
            </Typography>
            <Typography
              variant="h4"
              style={{ color: "#4c4d4c", fontWeight: "400" }}
            >
              Enter your details below
            </Typography>
          </Box>
        </Box>
        <Box
          width={1}
          className={classes.wrapper}
          style={{ boxSizing: "border-box" }}
          display="flex"
          flexDirection="column"
        >
          <Box>
            <InputLabel className={classes.inputLabel}>
              <MailOutlineIcon
                style={{ fontSize: "16px", marginRight: "6px" }}
              />
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
          <Box>
            <InputLabel className={classes.inputLabel}>
              <LockOutlinedIcon
                style={{ fontSize: "16px", marginRight: "6px" }}
              />
              Password
              <Typography
                className={classes.forgotPassword}
                variant="h4"
                component={Link}
                to="/forgotpassword"
              >
                Forgot Password
              </Typography>
            </InputLabel>
            <TextField
              fullWidth
              id="password"
              type="password"
              variant="outlined"
              classes={{ root: classes.inputField }}
            />
          </Box>
        </Box>
        <Box
          width={1}
          className={classes.wrapper}
          style={{ boxSizing: "border-box" }}
          marginTop="16px"
          marginBottom="40px"
        >
          <Button
            variant="contained"
            style={{ padding: "8px" }}
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="checkedC"
                size="large"
                className={classes.checkbox}
              />
            }
            label="Keep me logged In"
            classes={{ label: classes.checkboxLabel }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
