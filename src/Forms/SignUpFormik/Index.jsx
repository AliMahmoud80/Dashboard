import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import signUpImg from "../../assets/signUpImg.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import "../../styles/forms.css";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    minHeight: "100%",
  },
  formLeftSide: {
    display: "flex",
    backgroundImage: `url(${signUpImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  formRightSide: {
    backgroundColor: "#FDFDFD",
    // [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "flex-start",
    // },
  },
  formNav: {
    padding: "18px 24px 18px 40px",
    borderBottom: "1px solid #EDEBE9",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  loginBtnContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      marginTop: "10px",
    },
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

    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  loginButtonText: {
    fontWeight: "bold",
  },
  backButton: {
    marginRight: "16px",
    transition: "all 10s ease-in",
  },
  nextButtonFirst: {
    padding: "12px 61.5px",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    marginRight: "17%",
  },
  buttonContainerCat: {
    marginRight: "14%",
  },
  logoButton: {
    padding: "0",
  },
  // stepper: {
  //   [theme.breakpoints.down("sm")]: {
  //     marginTop: "44px",
  //   },
  // },
}));

function Dummy() {
  const classes = useStyles();

  return (
    <Grid container className={classes.formContainer}>
      {/* Right side image */}
      <Grid item xs={0} md={4} className={classes.formLeftSide}></Grid>
      {/* Left Side */}
      <Grid
        item
        xs={12}
        md={8}
        className={classes.formRightSide}
        style={{ maxHeight: "100vh", overflow: "auto" }}
      >
        {/* Navbar */}
        <Box display="flex" className={classes.formNav}>
          <Link component={Button} to="/" className={classes.logoButton}>
            <img src={logo} alt="company logo" className={classes.img} />
          </Link>
          <Box className={classes.loginBtnContainer}>
            <Typography
              variant="h4"
              color="primary"
              component={Link}
              to="/signin"
              className={classes.navLink}
            >
              Already have an account?
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.loginButton}
              component={Link}
              to="/signin"
            >
              <Typography
                variant="h4"
                color="primary"
                className={classes.loginButtonText}
              >
                Login
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* End Navbar */}
        {/* Stepper */}
        <Grid
          item
          xs={12}
          container
          flexDirection="column"
          alignItems="center"
          className={classes.stepper}
        >
          <SignUp />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dummy;
