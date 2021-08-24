import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  formLabel: {
    ...theme.typography.formLabel,
    marginBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4px",
    },
  },
  stepOneHeader: {
    marginBottom: "24px",
    paddingLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      padding: "0",
      "& >h1": {
        fontSize: "18px",
      },
    },
  },
  subHeader: {
    fontSize: "12px",
    color: "#5D5D5D",
    marginTop: "4px",
    paddingBottom: "24px",
  },
  w100: {
    width: "100%",
  },
  form: {
    display: "flex",
    width: "100%",
    marginBottom: "32px",
    paddingLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      marginTop: "15px",
    },
  },
  buttonContainer: {
    alignSelf: "center",
  },
  button: {
    width: "100%",
  },
}));

const stepOneValidationSchema = Yup.object({
  businessName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});

function StepOne(props) {
  const classes = useStyles();

  const handleSubmit = (values) => {
    props.handleNext(values);
  };
  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      onSubmit={handleSubmit}
      initialValues={props.data}
    >
      {(formik) => (
        <Form className={classes.mainContainer}>
          <Grid
            item
            md={8}
            xs={10}
            container
            direction="column"
            alignItems="flex-start"
            className={classes.formContainer}
          >
            <Grid
              item
              xs={12}
              container
              direction="column"
              className={classes.stepOneHeader}
            >
              <Typography variant="h1">
                Get started for free 14-day trial
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="column"
              className={classes.form}
            >
              <label htmlFor="businessName" className={classes.formLabel}>
                Write your business name
              </label>
              <TextField
                id="businessName"
                name="businessName"
                variant="outlined"
                value={formik.values.businessName}
                onChange={formik.handleChange}
                error={
                  formik.touched.businessName &&
                  Boolean(formik.errors.businessName)
                }
                helperText={
                  formik.touched.businessName && formik.errors.businessName
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              className={clsx(classes.w100, classes.buttonContainer)}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default StepOne;
