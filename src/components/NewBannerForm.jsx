import {
  Grid,
  Switch,
  Typography,
  withStyles,
  TextField,
  makeStyles,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { FastField, Field, Form, Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  formLabel: {
    ...theme.typography.formLabel,
    fontSize: "16px",
  },
  formInputContainer: {
    marginTop: "24px",
    marginBottom: "18px",
  },
  formInput: {
    width: "100%",
    "& input": {
      padding: "10.5px 12px",
    },
  },
  formInputMultiline: {
    width: "100%",
    "& input": {
      padding: "8px 12px",
    },
  },
  publicStatus: {
    alignSelf: "flex-start",
  },
  helpIcon: {
    width: "16px",
    height: "16px",
    color: "#666666",
    marginLeft: "4px",
  },
  switchContainer: {
    display: "flex",
    marginBottom: "16px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
}));

const NumberToggle = withStyles((theme) => ({
  root: {
    padding: "8px 16px",
    marginRight: "8px",
    backgroundColor: "#FFFFFF",
    color: "#181818",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    "&$selected": {
      color: "#0078D3",
      backgroundColor: "#E4F0F9",
      "& $label": {
        "& >p": {
          fontWeight: "600",
        },
        "& >svg": {
          color: "#0078D3",
        },
      },
    },
  },
  selected: {
    borderColor: "#0078D3 !important",
  },
  label: {
    "& >p": {
      fontWeight: "500",
    },
    "& >svg": {
      color: "#666666",
      marginRight: "8px",
    },
  },
}))(ToggleButton);

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    overflow: "initial",
    marginRight: "1px",
  },
  switchBase: {
    top: "-1px",
    left: "-2px",
    right: "11px",
    padding: 3,
    "&$checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: "0px solid transparent",
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#E8E8E8",
  },
  checked: {},
}))(Switch);

function NewBannerForm() {
  const classes = useStyles();

  const initialValues = {
    categoryName: "",
    categoryDescription: "",
    categoryNote: "",
    categoryDisplay: "grid",
    categoryColumns: 2,
    categoryTitles: true,
    categoryLabelNew: true,
    categoryLabelSignature: false,
    categoryPublished: false,
  };

  return (
    <Formik initialValues={initialValues}>
      {(formik) => (
        <Form>
          <Grid
            container
            justifyContent="space-between"
            item
            xs
            className={classes.formInputContainer}
            alignItems="center"
          >
            <label htmlFor="CategoryName" className={classes.formLabel}>
              Item name
            </label>
            <Grid item xs={8}>
              <FastField
                component={TextField}
                id="CategoryName"
                name="categoryName"
                variant="outlined"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                className={classes.formInput}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            item
            xs
            className={classes.formInputContainer}
          >
            <label htmlFor="Category Description" className={classes.formLabel}>
              Description
            </label>
            <Grid item xs={8}>
              <Field
                component={TextField}
                id="Category Description"
                name="categoryDescription"
                variant="outlined"
                className={classes.formInputMultiline}
                multiline
                rows={4}
                value={formik.values.categoryDescription}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            item
            xs
            className={classes.formInputContainer}
            alignItems="center"
          >
            <label htmlFor="ShowGridTitles" className={classes.formLabel}>
              Publish Status
            </label>
            <Grid item xs={8}>
              <Typography component="div">
                <Grid
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <AntSwitch
                      value={formik.values.categoryTitles}
                      checked={formik.values.categoryTitles}
                      name="categoryTitles"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    {formik.values.categoryTitles
                      ? "Published"
                      : "Not Published"}
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default NewBannerForm;
