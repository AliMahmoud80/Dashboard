import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import { IconButton } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UploadIcon from "../assets/UploadIcon.png";
import { useEffect, useState } from "react";
// Nothing
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
    marginBottom: "0",
  },
  formLabel: {
    fontSize: "12px",
    color: "#5D5D5D",
    textTransform: "capitalize",
    verticalAlign: "sub",
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
    // filter: "brightness(2)",
  },
  deleteButtonContainer: {
    marginLeft: "auto",
    height: "58px",
  },
  deleteButton: {
    color: theme.palette.common.red,
    margin: "10px 8px 20px auto",
    fontSize: "12px",
    fontWeight: "500",
  },
  newCategoryButton: {
    width: "100%",
  },
  categoryImgButtons: {
    opacity: "0",
    display: "flex",
    position: "absolute",
    top: "33%",
    left: "19%",
    "& button, p": {
      color: "#666666",
      padding: "6px",
      "& svg": {
        width: "15px",
        height: "15px",
      },
      "&:first-child": {
        marginRight: "4px",
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
        filter: "brightness(.5)",
      },
    },
  },
  subHeader: {
    color: "#5D5D5D",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    marginTop: "32px",
  },
  backButton: {
    marginRight: "16px",
  },
  languageMenu: {
    marginBottom: "32px",
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
  },
  imageInput: {
    display: "none",
  },
  categoryImgUpload: {
    "& p": {
      padding: "0",
    },
  },
}));

const StyledSelect = withStyles({
  root: {
    padding: "8px 12px",
  },
})(Select);

const CurrencySelect = withStyles({
  root: {
    backgroundColor: "#F1F1F1",
  },
})(StyledSelect);

const StyledAvatar = withStyles({
  root: {
    width: "unset",
    height: "unset",
  },
})(Avatar);

export default function AddCategory(props) {
  const classes = useStyles();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const imagePreviewReader = () => {
      if (props.image) {
        let reader = new FileReader();
        let file = props.image;
        reader.onloadend = () => {
          console.log(reader.result);
          setSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    imagePreviewReader();
  }, [props.image]);

  return (
    <Grid
      container
      direction="column"
      item
      xs
      className={classes.categoryFormContainer}
    >
      <Grid
        container
        // spacing={2}
        item
        xs
        className={classes.categoryFormInputs}
      >
        <Grid item xs={12} md={2}>
          <Box
            width="100px"
            height="100px"
            position="relative"
            className={classes.categoryImgContainer}
          >
            <input
              name={props.imageName}
              accept="image/*"
              className={classes.imageInput}
              id={props.imageName}
              type="file"
              onChange={props.handleImageChange}
            />
            {props.image ? (
              <>
                <img src={src} alt="category" className={classes.categoryImg} />
                <Box className={classes.categoryImgButtons}>
                  {/* <label htmlFor={props.imageName}> */}
                  <IconButton aria-label="change picture">
                    <CloudUploadOutlinedIcon />
                  </IconButton>
                  {/* </label> */}
                  <IconButton onClick={props.deleteImage}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <label
                  htmlFor={props.imageName}
                  className={classes.categoryImgUpload}
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="p"
                  >
                    <StyledAvatar src={UploadIcon} variant="square" />
                  </IconButton>
                </label>
              </>
            )}
          </Box>
        </Grid>
        <Grid container direction="column" item spacing={2} md={10} xs={12}>
          <Grid container item xs className={classes.formInputContainer}>
            <Grid item xs>
              <label htmlFor="name" className={classes.formLabel}>
                {props.type} Name
              </label>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                id="name"
                variant="outlined"
                name={props.nameName}
                value={props.nameValue}
                className={classes.formInput}
                onChange={props.handleChange}
                error={props.nameError}
                helperText={props.nameHelperText}
                style={{ marginTop: "10px" }}
              />
            </Grid>
          </Grid>
          <Grid container item xs className={classes.formInputContainer}>
            <Grid item xs>
              <label htmlFor="description" className={classes.formLabel}>
                Description
              </label>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                id="description"
                variant="outlined"
                name={props.descriptionName}
                value={props.descriptionValue}
                className={classes.formInput}
                multiline
                rows={4}
                onChange={props.handleChange}
                error={props.descriptionError}
                helperText={props.descriptionHelperText}
                style={{ marginTop: "10px" }}
              />
            </Grid>
          </Grid>
          {props.type === "item" ? (
            <>
              <Grid container item xs className={classes.formInputContainer}>
                <Grid item xs>
                  <label htmlFor="category" className={classes.formLabel}>
                    Category
                  </label>
                </Grid>
                <Grid item xs={12} md={9}>
                  <StyledSelect
                    id="category"
                    name={props.categoryName}
                    variant="outlined"
                    className={classes.formInput}
                    value={props.categoryValue}
                    onChange={props.handleChange}
                    style={{ marginTop: "10px" }}
                  >
                    <MenuItem value="desserts">Desserts</MenuItem>
                    <MenuItem value="main">Main</MenuItem>
                    <MenuItem value="breakfast">Breakfast</MenuItem>
                  </StyledSelect>
                </Grid>
              </Grid>
              <Grid container item xs className={classes.formInputContainer}>
                <Grid item xs>
                  <label htmlFor="price" className={classes.formLabel}>
                    Price
                  </label>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    id="price"
                    type="number"
                    name={props.priceName}
                    variant="outlined"
                    className={classes.formInput}
                    value={props.priceValue}
                    onChange={props.handleChange}
                    error={props.priceError}
                    helperText={props.priceHelperText}
                    placeholder="00,00"
                    style={{ marginTop: "10px" }}
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
                            id="currency"
                            name={props.currencyName}
                            variant="outlined"
                            value={props.currencyValue}
                            onChange={props.handleChange}
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
            </>
          ) : null}
        </Grid>
      </Grid>
      <Grid item xs className={classes.deleteButtonContainer}>
        <Button
          className={classes.deleteButton}
          startIcon={<DeleteOutlineOutlinedIcon />}
          onClick={props.remove}
        >
          Remove {props.type}
        </Button>
      </Grid>
    </Grid>
  );
}
