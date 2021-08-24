import {
  Avatar,
  Button,
  Grid,
  InputAdornment,
  ListItemIcon,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import ukraineFlag from "../../assets/ukraineFlag.png";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formLabel: {
    ...theme.typography.formLabel,
    fontWeight: "400",
    fontSize: "12px",
  },
  formInput: {
    width: "100%",
    "& input": {
      padding: "8px 12px",
      color: "#000",
      fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
  },
  stepFiveHeader: {
    marginBottom: "8px",
  },
  stepFiveSubHeader: {
    color: "#5d5d5d",
    marginBottom: "18px",
  },
  adornedStart: {
    paddingLeft: "0",
  },
  listItemIcon: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    margin: "16px 0 32px",
  },
  backButton: {
    marginRight: "16px",
  },
}));

const StyledSelect = withStyles({
  root: {
    padding: "8px 12px",
  },
})(Select);
const CurrencySelect = withStyles({
  root: {
    padding: "6px 12px",
    backgroundColor: "#F1F1F1",
  },
})(StyledSelect);

const StyledAvatar = withStyles({
  root: {
    width: "22.5px",
    height: "22.5px",
    marginLeft: "8px",
  },
})(Avatar);

const stepFiveValidationSchema = Yup.object({
  fullName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  phoneNumber: Yup.string()
    .max(15, "Phone number must be less than 15 numbers long")
    .min(5, "Phone number can't be less than 4 numbers long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function StepFive(props) {
  const classes = useStyles();
  const handleSubmit = (values) => {
    props.handleNext(values, true);
  };

  const handleBack = (values) => {
    props.handleBack(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={props.data}
      validationSchema={stepFiveValidationSchema}
    >
      {(formik) => (
        <Form className={classes.formContainer}>
          <Grid
            container
            item
            md={8}
            xs={11}
            direction="column"
            className={classes.formContainer}
            spacing={2}
          >
            <Grid item xs style={{ width: "100%" }}>
              <Typography variant="h1" className={classes.stepFiveHeader}>
                Complete Your Information
              </Typography>
              <Typography variant="h4" className={classes.stepFiveSubHeader}>
                Complete your information below to get free trial
              </Typography>
            </Grid>
            <Grid
              container
              style={{ width: "100%" }}
              spacing={2}
              direction="column"
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                item
                xs
                className={classes.formInputContainer}
              >
                <label htmlFor="fullName" className={classes.formLabel}>
                  Full Name
                </label>
                <Grid item md={8} xs={12}>
                  <TextField
                    id="fullName"
                    name="fullName"
                    variant="outlined"
                    className={classes.formInput}
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                item
                xs
                className={classes.formInputContainer}
              >
                <label htmlFor="phoneNumber" className={classes.formLabel}>
                  Phone Number
                </label>
                <Grid item xs={12} md={8}>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    variant="outlined"
                    className={classes.formInput}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                    InputProps={{
                      classes: {
                        adornedStart: classes.adornedStart,
                        input: classes.priceInput,
                      },
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className={classes.currencySelectNoBorder}
                        >
                          <CurrencySelect
                            id="phoneExtension"
                            name="phoneExtension"
                            variant="outlined"
                            value={formik.values.phoneExtension}
                            onChange={formik.handleChange}
                          >
                            <MenuItem value="usd">
                              <ListItemIcon className={classes.listItemIcon}>
                                +380
                                <StyledAvatar
                                  src={ukraineFlag}
                                  variant="square"
                                />
                              </ListItemIcon>
                            </MenuItem>
                            <MenuItem value="eur">
                              <ListItemIcon className={classes.listItemIcon}>
                                +390
                                <StyledAvatar
                                  src={ukraineFlag}
                                  variant="square"
                                />
                              </ListItemIcon>
                            </MenuItem>
                            <MenuItem value="gbp">
                              <ListItemIcon className={classes.listItemIcon}>
                                +320
                                <StyledAvatar
                                  src={ukraineFlag}
                                  variant="square"
                                />
                              </ListItemIcon>
                            </MenuItem>
                          </CurrencySelect>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                item
                xs
                className={classes.formInputContainer}
              >
                <label htmlFor="city" className={classes.formLabel}>
                  Choose City
                </label>
                <Grid item xs={12} md={8}>
                  <StyledSelect
                    id="city"
                    name="city"
                    variant="outlined"
                    className={classes.formInput}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="kyiv">Kyiv</MenuItem>
                    <MenuItem value="egypt">Egypt</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                  </StyledSelect>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                item
                xs
                className={classes.formInputContainer}
              >
                <label htmlFor="email" className={classes.formLabel}>
                  Email
                </label>
                <Grid item xs={12} md={8}>
                  <TextField
                    id="email"
                    name="email"
                    variant="outlined"
                    className={classes.formInput}
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                item
                xs
                className={classes.formInputContainer}
              >
                <label htmlFor="password" className={classes.formLabel}>
                  Password
                </label>
                <Grid item xs={12} md={8}>
                  <TextField
                    id="password"
                    name="password"
                    variant="outlined"
                    className={classes.formInput}
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.backButton}
                onClick={() => handleBack(formik.values)}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Finish
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default StepFive;
