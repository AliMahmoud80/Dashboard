import { Box, Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Field, FieldArray, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import AddCategory from "../../components/AddCategory";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryFormContainer: {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 16px #EEEEEE",
    borderRadius: "4px",
  },
  categoryFormInputs: {
    padding: "16px",
    borderBottom: "1px solid #EDEBE9",
    justifyContent: "space-between",
  },
  formLabel: {
    fontSize: "16px",
    color: "#5D5D5D",
  },
  formInput: {
    width: "100%",
    "& input": {
      padding: "8px 12px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
  },
  categoryImg: {
    width: "100px",
    height: "100px",
    borderRadius: "4px",
    filter: "brightness(2)",
  },
  deleteButtonContainer: {
    marginLeft: "auto",
  },
  deleteButton: {
    color: theme.palette.common.red,
    marginTop: "16px",
    marginLeft: "auto",
    fontSize: "12px",
    fontWeight: "500",
  },
  newCategoryButton: {
    width: "100%",
    fontSize: "14px",
  },
  categoryImgButtons: {
    opacity: "0",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "35px",
    top: "20px",
    "& button": {
      color: "#666666",
      padding: "6px",
      "& svg": {
        width: "15px",
        height: "15px",
      },
      "&:first-child": {
        marginBottom: "8px",
      },
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#333333",
      },
    },
  },
  categoryImgContainer: {
    "&:hover": {
      "& $categoryImgButtons": {
        opacity: "1",
      },
      "& $categoryImg": {
        filter: "brightness(1)",
      },
    },
  },
  subHeader: {
    color: "#5D5D5D",
    fontSize: "14px",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    margin: "16px 0 32px",
  },
  backButton: {
    marginRight: "16px",
  },
  languageMenu: {
    marginBottom: "32px",
  },
  categoriesError: {
    margin: "30px 0",
  },
}));

const StyledSelect = withStyles({
  root: {
    padding: "8px 12px",
  },
})(Select);

const stepThreeValidationSchema = Yup.object().shape({
  categories: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"), // these constraints take precedence
        // description: Yup.string()
        //   .min(10, "Must be at least 10 characters long")
        //   .max(300, "Must be less than 300 characters")
        //   .required("Required"), // these constraints take precedence
      })
    )
    .required("Must have category") // these constraints are shown if and only if inner constraints are satisfied
    .min(1, " "),
});

// const stepThreeValidationSchema = Yup.object({
//   name: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
//   description: Yup.string()
//     .min(10, "Must be at least 10 characters long")
//     .max(300, "Must be less than 300 characters")
//     .required("Required"),
// });

function StepThree(props) {
  const classes = useStyles();

  const handleSubmit = (values) => {
    props.handleNext(values);
  };

  const handleBack = (values) => {
    props.handleBack(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={props.data}
      validationSchema={stepThreeValidationSchema}
    >
      {(formik) => (
        <Form className={classes.formContainer}>
          <Grid container item md={8} xs={11} spacing={2} direction="column">
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              item
              xs
              className={classes.languageMenu}
            >
              <label htmlFor="menuLanguage" className={classes.formLabel}>
                Language of your menu
              </label>
              <Grid item xs={12} md={8}>
                <StyledSelect
                  id="menuLanguage"
                  variant="outlined"
                  name="menuLanguage"
                  className={classes.formInput}
                  value={formik.values.menuLanguage}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="arabic">Arabic</MenuItem>
                </StyledSelect>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs>
                <Typography variant="h1">Add Categories</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  marginTop="8px"
                >
                  <Typography className={classes.subHeader}>
                    Try with “Starters” or “Desserts”
                  </Typography>
                  <Button color="primary">Auto-Fill</Button>
                </Box>
              </Grid>
            </Grid>
            {/* <Grid
              container
              direction="column"
              item
              xs
              className={classes.categoryFormContainer}
            >
              <Grid container item xs className={classes.categoryFormInputs}>
                <Grid item md={2}>
                  <Box
                    width="100px"
                    height="100px"
                    position="relative"
                    className={classes.categoryImgContainer}
                  >
                    <img
                      src={CategoryPlaceholder}
                      alt="category"
                      className={classes.categoryImg}
                    />
                    <Box className={classes.categoryImgButtons}>
                      <IconButton>
                        <CloudUploadOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid container direction="column" item spacing={2} md={10}>
                  <Grid
                    container
                    item
                    xs
                    className={classes.formInputContainer}
                  >
                    <Grid item xs>
                      <label
                        htmlFor="name"
                        className={classes.formLabel}
                      >
                        Category Name
                      </label>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        id="name"
                        variant="outlined"
                        name="name"
                        className={classes.formInput}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name &&
                          Boolean(formik.errors.name)
                        }
                        helperText={
                          formik.touched.name &&
                          formik.errors.name
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs
                    className={classes.formInputContainer}
                  >
                    <Grid item xs>
                      <label
                        htmlFor="description"
                        className={classes.formLabel}
                      >
                        Description
                      </label>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        id="description"
                        variant="outlined"
                        name="description"
                        className={classes.formInput}
                        multiline
                        rows={4}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs className={classes.deleteButtonContainer}>
                <Button
                  className={classes.deleteButton}
                  startIcon={<DeleteOutlineOutlinedIcon />}
                >
                  Remove Category
                </Button>
              </Grid>
            </Grid> */}
            <FieldArray
              name="categories"
              render={({ push, remove }) => {
                return (
                  <Grid
                    container
                    display="flex"
                    spacing={2}
                    style={{ flexDirection: "column" }}
                  >
                    {formik.values.categories.map((category, index) => (
                      <Grid item xs>
                        <AddCategory
                          key={index}
                          nameName={`categories.${index}.name`}
                          nameValue={category.name}
                          type="Category"
                          nameError={
                            Boolean(
                              getIn(formik.errors, `categories.${index}.name`)
                            ) &&
                            getIn(formik.touched, `categories.${index}.name`)
                          }
                          nameHelperText={
                            <ErrorMessage name={`categories.${index}.name`} />
                          }
                          descriptionName={`categories.${index}.description`}
                          descriptionValue={category.description}
                          descriptionError={
                            Boolean(
                              getIn(
                                formik.errors,
                                `categories.${index}.description`
                              )
                            ) &&
                            getIn(
                              formik.touched,
                              `categories.${index}.description`
                            )
                          }
                          descriptionHelperText={
                            <ErrorMessage
                              name={`categories.${index}.description`}
                            />
                          }
                          handleChange={formik.handleChange}
                          remove={() => remove(index)}
                          image={category.image}
                          imageName={`categories.${index}.image`}
                          handleImageChange={(event) => {
                            formik.setFieldValue(
                              `categories.${index}.image`,
                              event.currentTarget.files[0]
                            );
                            console.log(event);
                          }}
                          deleteImage={() => {
                            formik.setFieldValue(
                              `categories.${index}.image`,
                              null
                            );
                          }}
                        />
                      </Grid>
                    ))}
                    <Grid item xs>
                      {typeof formik.errors.categories === "string" ? (
                        <Typography
                          variant="h1"
                          color="error"
                          className={classes.categoriesError}
                        >
                          {formik.errors.categories}
                        </Typography>
                      ) : null}
                    </Grid>
                    <Grid item xs style={{ padding: "8px 0" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.newCategoryButton}
                        onClick={() => push({ name: "", description: "" })}
                      >
                        New Category
                      </Button>
                    </Grid>
                  </Grid>
                );
              }}
            />
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
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? error : null;
    }}
  />
);

export default StepThree;
