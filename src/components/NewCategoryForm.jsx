import {
  Grid,
  Switch,
  Typography,
  withStyles,
  TextField,
  makeStyles,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ViewListIcon from "@material-ui/icons/ViewList";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import { FastField, Field, Form, Formik } from "formik";
import AddHeaders from "./AddHeaders";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import Uploader from "./Uploader";

const useStyles = makeStyles((theme) => ({
  formLabel: {
    ...theme.typography.formLabel,
    fontSize: "16px",
  },
  formInputContainer: {
    marginTop: "36px",
    // marginBottom: "22px",
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
  addImage: {
    marginTop: "-10px",
    width: "200px",
    minHeight: "200px",
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

function NewCategoryForm() {
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
            className={classes.formInputContainer}
            alignItems="center"
            style={{ marginTop: "24px" }}
          >
            <label htmlFor="CategoryName" className={classes.formLabel}>
              Category Name
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
                placeholder="Add a category name"
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
                placeholder="Type a category description"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            xs
            className={classes.formInputContainer}
            style={{ marginTop: "42px" }}
          >
            <label
              htmlFor="Category Description"
              className={classes.formLabel}
              style={{ fontSize: "18px", color: "#181818", display: "flex" }}
            >
              <PhotoOutlinedIcon
                style={{
                  width: "22px",
                  marginTop: "-2px",
                  marginRight: "10px",
                }}
              />
              Category Photo
            </label>
            <Grid item xs={8}>
              <AddHeaders className={classes.addHeaders} />
              <Grid item container className={classes.addImage}>
                <Uploader />
              </Grid>
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
            <label htmlFor="DisplayAs" className={classes.formLabel}>
              Display As
            </label>
            <Grid item xs={8}>
              <ToggleButtonGroup
                exclusive
                value={formik.values.categoryDisplay}
                onChange={(e, value) => {
                  if (value) {
                    formik.setFieldValue("categoryDisplay", value);
                  }
                }}
                aria-label="Display As"
                name="categoryDisplay"
                id="DisplayAs"
              >
                <NumberToggle
                  className={classes.toggleButton}
                  value="grid"
                  aria-label="grid"
                >
                  <AppsOutlinedIcon />
                  <Typography>Grid</Typography>
                </NumberToggle>
                <NumberToggle
                  className={classes.toggleButton}
                  value="list"
                  aria-label="list"
                >
                  <ViewListIcon />
                  <Typography>List</Typography>
                </NumberToggle>
              </ToggleButtonGroup>
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
            <label htmlFor="NumberOfColumns" className={classes.formLabel}>
              Number of Columns
            </label>
            <Grid item xs={8}>
              <ToggleButtonGroup
                exclusive
                value={formik.values.categoryColumns}
                onChange={(e, value) => {
                  if (value) {
                    formik.setFieldValue("categoryColumns", value);
                  }
                }}
                aria-label="Number of Columns"
                id="NumberOfColumns"
              >
                <NumberToggle
                  className={classes.toggleButton}
                  value={2}
                  aria-label="2"
                >
                  <Typography>2</Typography>
                </NumberToggle>
                <NumberToggle
                  className={classes.toggleButton}
                  value={3}
                  aria-label="3"
                >
                  <Typography>3</Typography>
                </NumberToggle>
              </ToggleButtonGroup>
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
              Show Grid Titles
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
                    {formik.values.categoryTitles ? "Show" : "Hide"}
                  </Grid>
                </Grid>
              </Typography>
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
            <Grid item className={classes.publicStatus}>
              <label htmlFor="CategoryLabel" className={classes.formLabel}>
                Category Label
              </label>
            </Grid>
            <Grid item xs={8}>
              <Typography component="div" className={classes.switchContainer}>
                <Grid item xs={4} container alignItems="center">
                  <Typography>Mark as ‘New’</Typography>
                  <HelpOutlineIcon className={classes.helpIcon} />
                </Grid>
                <Grid
                  item
                  xs={7}
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <AntSwitch
                      name="categoryLabelNew"
                      value={formik.values.categoryLabelNew}
                      checked={formik.values.categoryLabelNew}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    {formik.values.categoryLabelNew ? "Yes" : "No"}
                  </Grid>
                </Grid>
              </Typography>
              <Typography component="div" className={classes.switchContainer}>
                <Grid item xs={4} container alignItems="center">
                  <Typography>Mark as ‘Signature’</Typography>
                  <HelpOutlineIcon className={classes.helpIcon} />
                </Grid>
                <Grid
                  item
                  xs={7}
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <AntSwitch
                      name="categoryLabelSignature"
                      value={formik.values.categoryLabelSignature}
                      checked={formik.values.categoryLabelSignature}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    {formik.values.categoryLabelSignature ? "Yes" : "No"}
                  </Grid>
                </Grid>
              </Typography>
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
            <label htmlFor="PublishStatus" className={classes.formLabel}>
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
                      name="categoryPublished"
                      value={formik.values.categoryPublished}
                      checked={formik.values.categoryPublished}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item>
                    {formik.values.categoryPublished
                      ? "Published"
                      : "Unpublished"}
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

export default NewCategoryForm;
