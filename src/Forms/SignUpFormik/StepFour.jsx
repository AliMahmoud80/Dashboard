import { Box, Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    marginBottom: "24px",
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
  },
  categoryImg: {
    width: "100px",
    height: "100px",
    borderRadius: "4px",
    filter: "brightness(2)",
  },
  categoryImgUpload: {
    width: "100px",
    height: "100px",
    borderRadius: "4px",
  },
  deleteButtonContainer: {
    marginLeft: "auto",
  },
  deleteButton: {
    color: theme.palette.common.red,
    paddingTop: "16px",
    marginLeft: "auto",
    fontSize: "12px",
    fontWeight: "500",
  },
  newCategoryButton: {
    width: "100%",
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
        width: "12px",
        height: "12px",
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

  currencySelectNoBorder: {
    "& fieldset": {
      border: "none",
    },
  },
  adornedEnd: {
    paddingRight: "0",
  },
  priceInput: {
    textAlign: "end",
  },
  subheader: {
    color: "#5D5D5D;",
    fontSize: "14px",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    margin: "16px 0 32px",
  },
  backButton: {
    marginRight: "16px",
  },
}));

const stepFourValidationSchema = Yup.object().shape({
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"), // these constraints take precedence
        // description: Yup.string()
        //   .min(10, "Must be at least 10 characters long")
        //   .max(300, "Must be less than 300 characters")
        //   .required("Required"), // these constraints take precedence
        price: Yup.string()
          .matches(/^\d+$/, "Must contain numbers only")
          .max(6, "Price must be at less than 6 numbers long")
          .required("Required"),
      })
    )
    .required("Must have Item") // these constraints are shown if and only if inner constraints are satisfied
    .min(1, " "),
});
// const stepFourValidationSchema = Yup.object({
//   itemNameA: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
//   itemDescriptionA: Yup.string()
//     .min(10, "Must be at least 10 characters long")
//     .max(300, "Must be less than 300 characters")
//     .required("Required"),
//   itemPriceA: Yup.string()
//     .matches(/^\d+$/, "Must contain numbers only")
//     .max(6, "Price must be at less than 6 numbers long")
//     .required("Required"),
//   itemNameB: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
//   itemDescriptionB: Yup.string()
//     .min(10, "Must be at least 10 characters long")
//     .max(300, "Must be less than 300 characters")
//     .required("Required"),
//   itemPriceB: Yup.string()
//     .matches(/^\d+$/, "Must contain numbers only")
//     .max(6, "Price must be at less than 6 numbers long")
//     .required("Required"),
// });

function StepFour(props) {
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
      validationSchema={stepFourValidationSchema}
    >
      {(formik) => (
        <Form className={classes.formContainer}>
          <Grid
            container
            item
            xs={11}
            md={8}
            direction="column"
            className={classes.itemsGridContainer}
            spacing={2}
          >
            <Grid container item>
              <Grid item xs>
                <Typography variant="h1">Add Items</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  marginTop="8px"
                >
                  <Typography className={classes.subheader}>
                    Try with “Black Burger with Sauce” or “Green Tea”
                  </Typography>
                  <Button color="primary"> Auto-Fill</Button>
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
                      <label htmlFor="itemNameA" className={classes.formLabel}>
                        Item Name
                      </label>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        id="itemNameA"
                        name="itemNameA"
                        variant="outlined"
                        className={classes.formInput}
                        value={formik.values.itemNameA}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.itemNameA &&
                          Boolean(formik.errors.itemNameA)
                        }
                        helperText={
                          formik.touched.itemNameA && formik.errors.itemNameA
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
                        htmlFor="itemDescriptionA"
                        className={classes.formLabel}
                      >
                        Description
                      </label>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        id="itemDescriptionA"
                        name="itemDescriptionA"
                        variant="outlined"
                        className={classes.formInput}
                        multiline
                        rows={4}
                        value={formik.values.itemDescriptionA}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.itemDescriptionA &&
                          Boolean(formik.errors.itemDescriptionA)
                        }
                        helperText={
                          formik.touched.itemDescriptionA &&
                          formik.errors.itemDescriptionA
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
                        htmlFor="itemCategoryA"
                        className={classes.formLabel}
                      >
                        Category
                      </label>
                    </Grid>
                    <Grid item md={9}>
                      <StyledSelect
                        id="itemCategoryA"
                        name="itemCategoryA"
                        variant="outlined"
                        className={classes.formInput}
                        value={formik.values.itemCategoryA}
                        onChange={formik.handleChange}
                      >
                        <MenuItem value="desserts">Desserts</MenuItem>
                        <MenuItem value="main">Main</MenuItem>
                        <MenuItem value="breakfast">Breakfast</MenuItem>
                      </StyledSelect>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs
                    className={classes.formInputContainer}
                  >
                    <Grid item xs>
                      <label htmlFor="itemPriceA" className={classes.formLabel}>
                        Price
                      </label>
                    </Grid>
                    <Grid item md={9}>
                      <TextField
                        id="itemPriceA"
                        name="itemPriceA"
                        variant="outlined"
                        className={classes.formInput}
                        value={formik.values.itemPriceA}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.itemPriceA &&
                          Boolean(formik.errors.itemPriceA)
                        }
                        helperText={
                          formik.touched.itemPriceA && formik.errors.itemPriceA
                        }
                        placeholder="00,00"
                        InputProps={{
                          classes: {
                            adornedEnd: classes.adornedEnd,
                            input: classes.priceInput,
                          },
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.currencySelectNoBorder}
                            >
                              <CurrencySelect
                                id="itemCurrencyA"
                                name="itemCurrencyA"
                                variant="outlined"
                                value={formik.values.itemCurrencyA}
                                onChange={formik.handleChange}
                              >
                                <MenuItem value="usd">USD</MenuItem>
                                <MenuItem value="eur">EUR</MenuItem>
                                <MenuItem value="gbp">GBP</MenuItem>
                              </CurrencySelect>
                            </InputAdornment>
                          ),
                        }}
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
                  Remove item
                </Button>
              </Grid>
            </Grid> */}
            <FieldArray
              name="items"
              render={({ push, remove }) => {
                return (
                  <Grid
                    container
                    display="flex"
                    spacing={2}
                    style={{ flexDirection: "column" }}
                  >
                    {formik.values.items.map((item, index) => (
                      <Grid item xs>
                        <AddCategory
                          key={index}
                          type="item"
                          nameName={`items.${index}.name`}
                          nameValue={item.name}
                          nameError={
                            Boolean(
                              getIn(formik.errors, `items.${index}.name`)
                            ) && getIn(formik.touched, `items.${index}.name`)
                          }
                          nameHelperText={
                            <ErrorMessage name={`items.${index}.name`} />
                          }
                          descriptionName={`items.${index}.description`}
                          descriptionValue={item.description}
                          descriptionError={
                            Boolean(
                              getIn(formik.errors, `items.${index}.description`)
                            ) &&
                            getIn(formik.touched, `items.${index}.description`)
                          }
                          descriptionHelperText={
                            <ErrorMessage name={`items.${index}.description`} />
                          }
                          categoryName={`items.${index}.category`}
                          categoryValue={item.category}
                          priceName={`items.${index}.price`}
                          priceValue={item.price}
                          priceError={
                            Boolean(
                              getIn(formik.errors, `items.${index}.price`)
                            ) && getIn(formik.touched, `items.${index}.price`)
                          }
                          priceHelperText={
                            <ErrorMessage name={`items.${index}.price`} />
                          }
                          currencyName={`items.${index}.currency`}
                          currencyValue={item.currency}
                          handleChange={formik.handleChange}
                          remove={() => remove(index)}
                          image={item.image}
                          imageName={`items.${index}.image`}
                          handleImageChange={(event) => {
                            formik.setFieldValue(
                              `items.${index}.image`,
                              event.currentTarget.files[0]
                            );
                            console.log(event);
                          }}
                          deleteImage={() => {
                            formik.setFieldValue(`items.${index}.image`, null);
                          }}
                        />
                      </Grid>
                    ))}
                    <Grid item xs>
                      {typeof formik.errors.items === "string" ? (
                        <Typography
                          variant="h1"
                          color="error"
                          className={classes.categoriesError}
                        >
                          {formik.errors.items}
                        </Typography>
                      ) : null}
                    </Grid>
                    <Grid item xs style={{ padding: "8px 0" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.newCategoryButton}
                        onClick={() =>
                          push({
                            name: "",
                            description: "",
                            category: "desserts",
                            price: "",
                            currency: "usd",
                            image: "",
                          })
                        }
                      >
                        New Item
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

export default StepFour;
