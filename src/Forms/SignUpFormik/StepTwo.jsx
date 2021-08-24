import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Form, Formik } from "formik";
import RadioCard from "../../components/RadioCard";

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
  header: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  subHeader: {
    color: "#5D5D5D",
    marginTop: "8px",
    marginBottom: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  buttonContainer: {
    alignSelf: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "100%",
      "& >button": {
        width: "50%",
      },
    },
  },
  backButton: {
    marginRight: "16px",
  },
  headers: {
    width: "100%",
  },
}));

function StepTwo(props) {
  const classes = useStyles();

  const handleSubmit = (values) => {
    props.handleNext(values);
  };

  const handleBack = (values) => {
    props.handleBack(values);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={props.data}>
      {(formik) => (
        <Form className={classes.mainContainer}>
          <Grid
            item
            md={8}
            xs={11}
            container
            direction="column"
            alignItems="flex-start"
            className={classes.formContainer}
          >
            <Grid item xs={12} className={classes.headers}>
              <Typography variant="h1" className={classes.header}>
                Choose the solutions you need
              </Typography>
              <Typography variant="h4" className={classes.subHeader}>
                You can also add or remove solutions later
              </Typography>
            </Grid>
            <hr />
            <RadioCard
              header="Tablet Menu"
              subHeader="Say good-bye to old and dirty paper and plastic menus 🖐🏼
                  Customers check all your menu on easy to disinfect digital
                  tablets menu. They can either order from tablets or through
                  the waitress."
              solution={formik.values.solution}
              value="a"
              name="solution"
              handleChange={formik.handleChange}
            />
            <RadioCard
              header="QR Code / Mobile Menu"
              subHeader="Customers can check your menu and order from their personal
              smartphones. Just place QR codes on the tables at your
              restaurant."
              solution={formik.values.solution}
              value="b"
              name="solution"
              handleChange={formik.handleChange}
            />
            <Grid item xs={6} className={clsx(classes.buttonContainer)}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.backButton}
                onClick={() => handleBack(formik.values)}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default StepTwo;
