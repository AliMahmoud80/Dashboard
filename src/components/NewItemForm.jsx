import { useState } from "react";
import {
  Grid,
  Switch,
  Typography,
  withStyles,
  TextField,
  IconButton,
  Button,
  ButtonGroup,
  Select,
  FormControlLabel,
  makeStyles,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
import AddHeaders from "./AddHeaders";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { HelpOutline, DeleteOutline, Add, Remove } from "@material-ui/icons";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import Uploader from "./Uploader";
import VideoUploader from "./VideoUploader";
import Player from "../libs/Player";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    "& input": {
      height: "40px",
      boxSizing: "border-box",
      // width: "calc(100% - 49px)",
    },
    "& .input-adornment": {
      backgroundColor: "#f1f1f1",
      height: "100%",
      position: "absolute",
      right: "0",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      width: "54px",
      justifyContent: "center",
      fontSize: "14px",
    },
  },
  inputWithAdronment: {
    "& input": {
      width: "calc(100% - 49px)",
    },
  },
  formLabel: {
    ...theme.typography.formLabel,
    fontSize: "16px",
  },
  formInputContainer: {
    marginTop: "32px",
    // marginBottom: "18px",
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

  deleteBtn: {
    color: "#FD3A57",
    background: "rgb(253, 58, 87, .1)",
    borderRadius: "4px",
    width: "40px",
    height: "40px",
  },
  numbersBtnGroup: {
    "& button": {
      borderRadius: "0",
      padding: "0",
      border: "0 !important",
      color: "#000",
    },
  },
  smallIcon: {
    fontSize: "16px",
  },
  addImage: {
    marginTop: "10px",
    width: "200px",
    // height: "200px",
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

function NewItemForm() {
  const classes = useStyles();
  const [state, setState] = useState({
    categoryName: "",
    categoryDescription: "",
    categoryNote: "",
    publishStatus: false,
    categoryLabelNew: true,
    categoryLabelSignature: true,
    gridTitles: true,
  });

  const [display, setDisplay] = useState("grid");
  const [columns, setColumns] = useState(2);

  const handleDisplay = (event, newDisplay) => {
    setDisplay(newDisplay);
  };
  const handleColumns = (event, newColumns) => {
    setColumns(newColumns);
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <Grid
        container
        justifyContent="space-between"
        item
        xs
        className={classes.formInputContainer}
        alignItems="center"
        style={{ marginTop: "24px" }}
      >
        <label htmlFor="CategoryName" className={classes.formLabel}>
          Item Name
        </label>
        <Grid item xs={8}>
          <TextField
            id="CategoryName"
            name="categoryName"
            variant="outlined"
            value={state.categoryName}
            onChange={handleInputChange}
            className={classes.formInput}
            placeholder="Add a item name"
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
          <TextField
            id="Category Description"
            variant="outlined"
            className={classes.formInputMultiline}
            multiline
            rows={4}
            value={state.categoryDescription}
            name="categoryDescription"
            onChange={handleInputChange}
            placeholder="Type a item description"
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        item
        xs
        className={classes.formInputContainer}
        style={{ marginTop: "60px" }}
      >
        <label htmlFor="Category Description" className={classes.formLabel}>
          Item Photo & video
        </label>
        <Grid item xs={8}>
          <Grid container justifyContent="space-between" xs={12}>
            <Grid item>
              <AddHeaders
                header="Item Photo"
                icon={<PhotoOutlinedIcon />}
                className={classes.addHeaders}
              />
              <Grid item container className={classes.addImage}>
                <Uploader />
              </Grid>
            </Grid>
            <Grid item>
              <AddHeaders
                header="Video"
                icon={<VideoLibraryOutlinedIcon />}
                className={classes.addHeaders}
              />
              <Grid item className={classes.addImage}>
                <Player id="preview-player" />
                <VideoUploader />
              </Grid>
            </Grid>
          </Grid>
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
          Price(s)
        </label>
        <Grid container xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                type="number"
                placeholder="0.00"
                classes={{
                  root:
                    classes.inputContainer + " " + classes.inputWithAdronment,
                }}
                InputProps={{
                  endAdornment: <div className="input-adornment">USD</div>,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                classes={{ root: classes.inputContainer }}
                fullWidth
                placeholder="Description (e.g. Large, Medium, Small)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                classes={{ root: classes.deleteBtn }}
                aria-label="Delete"
              >
                <DeleteOutline />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Button color="primary">Add Price</Button>
            </Grid>
          </Grid>
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
          Preparation Time
        </label>
        <Grid container xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                type="number"
                placeholder="0.00"
                classes={{
                  root:
                    classes.inputContainer + " " + classes.inputWithAdronment,
                }}
                InputProps={{
                  endAdornment: <div className="input-adornment">Min</div>,
                }}
              />
            </Grid>
          </Grid>
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
          Item Modifiers
        </label>
        <Grid container xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <FormControlLabel
                    style={{ width: "100%" }}
                    value="required"
                    control={
                      <Select
                        labelId="find-modifier"
                        variant="outlined"
                        fullWidth
                        MenuProps={{
                          classes: { paper: "custom-selectMenu" },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "center",
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        <MenuItem value="a">Test</MenuItem>
                      </Select>
                    }
                    label="Modifiers"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel
                    control={
                      <TextField
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={0}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <ButtonGroup
                                orientation="vertical"
                                variant="text"
                                classes={{ root: classes.numbersBtnGroup }}
                              >
                                <IconButton>
                                  <Add className={classes.smallIcon} />
                                </IconButton>
                                <IconButton>
                                  <Remove className={classes.smallIcon} />
                                </IconButton>
                              </ButtonGroup>
                            </InputAdornment>
                          ),
                        }}
                      />
                    }
                    label="Min"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel
                    control={
                      <TextField
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={0}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <ButtonGroup
                                orientation="vertical"
                                variant="text"
                                classes={{ root: classes.numbersBtnGroup }}
                              >
                                <IconButton>
                                  <Add className={classes.smallIcon} />
                                </IconButton>
                                <IconButton>
                                  <Remove className={classes.smallIcon} />
                                </IconButton>
                              </ButtonGroup>
                            </InputAdornment>
                          ),
                        }}
                      />
                    }
                    label="Max"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel
                    value="required"
                    control={
                      <Grid container style={{ marginTop: "16px" }}>
                        <Switch color="primary" />
                        <Grid
                          item
                          style={{
                            marginLeft: "6px",
                            fontSize: "14px",
                            color: "#5c5c5d",
                          }}
                        >
                          {state.categoryLabelNew ? "Yes" : "No"}
                        </Grid>
                      </Grid>
                    }
                    label="Required?"
                    labelPlacement="top"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} style={{ alignSelf: "flex-end" }}>
              <IconButton
                classes={{ root: classes.deleteBtn }}
                aria-label="Delete"
              >
                <DeleteOutline />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Button color="primary">Add Modifier</Button>
            </Grid>
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
        <Grid item className={classes.publicStatus}>
          <label htmlFor="CategoryLabel" className={classes.formLabel}>
            Item Label
          </label>
        </Grid>
        <Grid item xs={8}>
          <Typography component="div" className={classes.switchContainer}>
            <Grid item xs={4} container alignItems="center">
              <Typography>Mark as ‘New’</Typography>
              <HelpOutline className={classes.helpIcon} />
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
                <Switch
                  checked={state.categoryLabelNew}
                  onChange={handleCheckChange}
                  name="categoryLabelNew"
                />
              </Grid>
              <Grid item>{state.categoryLabelNew ? "Yes" : "No"}</Grid>
            </Grid>
          </Typography>
          <Typography component="div" className={classes.switchContainer}>
            <Grid item xs={4} container alignItems="center">
              <Typography>Mark as ‘Signature’</Typography>
              <HelpOutline className={classes.helpIcon} />
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
                <Switch
                  checked={state.categoryLabelSignature}
                  onChange={handleCheckChange}
                  name="categoryLabelSignature"
                />
              </Grid>
              <Grid item>{state.categoryLabelSignature ? "Yes" : "No"}</Grid>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        xs
        className={classes.formInputContainer}
        alignItems="center"
      >
        <label htmlFor="PublishStatus" className={classes.formLabel}>
          Publish Status
        </label>
        <Grid item xs={8}>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <Switch
                  checked={state.publishStatus}
                  onChange={handleCheckChange}
                  name="publishStatus"
                />
              </Grid>
              <Grid item>
                {state.publishStatus ? "Published" : "Not Published"}
              </Grid>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default NewItemForm;
