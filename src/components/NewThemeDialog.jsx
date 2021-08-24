import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Box,
  Button,
  FormControlLabel,
  Radio,
  TextField,
  RadioGroup,
} from "@material-ui/core";
import AddHeaders from "./AddHeaders";
import Uploader from "./Uploader";
import { makeStyles } from "@material-ui/core";
import { PhotoOutlined } from "@material-ui/icons";
import smartButtonIcon from "../assets/smartButtonIcon.svg";
import roundedExample from "../assets/roundedExample.svg";
import pilleddExample from "../assets/pilledExample.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "19px 19px 18px 32px",
    alignItems: "center",
    minWidth: "800px",
    overflow: "auto",
  },
  leftSide: {
    borderRight: "1px solid #EDEBE9",
    padding: "24px 32px 40px",
    borderTop: "1px solid #EDEBE9",
  },
  addHeaders: {
    alignItems: "center",
    flexWrap: "nowrap",
  },
  addImage: {
    marginTop: "30px",
    maxWidth: "368px",
    alignSelf: "start",
  },
  rightSide: {
    padding: "24px 40px",
    borderTop: "1px solid #EDEBE9",
  },
  radio: {
    padding: "0",
  },
  dialogContent: {
    display: "flex",
    padding: "0",
    minWidth: "800px",
    overflow: "auto",
  },
  formLabel: {
    ...theme.typography.formLabel,
    fontSize: "16px",
    fontWeight: "normal",
  },
  formInputContainer: {
    marginTop: "24px",
    marginBottom: "18px",
  },
  uploader: {
    width: "368px",
    height: "250px",
  },
  shapeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    "& img": {
      marginTop: "28px",
    },
  },
}));

const NewThemeDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const [shape, setShape] = useState("1");

  const handleShapeChange = (e) => {
    setShape(e.target.value);
  };

  return (
    <Dialog
      scroll="body"
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth="md"
    >
      <Grid container classes={{ root: classes.header }}>
        <Typography variant="h1">Add New Theme</Typography>
        <Box>
          <Button
            style={{
              fontWeight: "400",
              marginRight: "15px",
              border: "1px solid #F3F2F1",
            }}
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Grid>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          xs={6}
          className={classes.leftSide}
        >
          <AddHeaders
            header="Home Screen Background"
            subHeader="Choose color or image/video"
            icon={<PhotoOutlined />}
            className={classes.addHeaders}
          />
          <Grid item style={{ alignSelf: "flex-start", marginTop: "15px" }}>
            <FormControlLabel
              value="img"
              control={
                <Radio
                  color="primary"
                  checked={true}
                  classes={{ root: classes.radio }}
                />
              }
              label="Image"
            />
          </Grid>
          <Grid item container className={classes.addImage}>
            <Uploader rootClass={classes.uploader} />
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.rightSide}>
          <AddHeaders
            header="Button Text"
            subHeader="Type button text"
            icon={<img src={smartButtonIcon} />}
          />
          <Grid
            container
            justifyContent="space-between"
            xs
            className={classes.formInputContainer}
            alignItems="center"
          >
            <label htmlFor="CategoryName" className={classes.formLabel}>
              Button Text (English)
            </label>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                className={classes.formInput}
                // value="Menu"
                placeholder="Add text name"
              />
            </Grid>
          </Grid>{" "}
          <Grid
            container
            justifyContent="space-between"
            xs
            className={classes.formInputContainer}
            alignItems="center"
          >
            <label htmlFor="CategoryName" className={classes.formLabel}>
              Button Text (Arabic)
            </label>
            <Grid item xs={6}>
              <TextField
                // style={{ direction: "rtl" }}
                // value="لائحه الطعام"
                variant="outlined"
                className={classes.formInput}
                placeholder="Add text name"
              />
            </Grid>
          </Grid>
          <Grid container xs style={{ marginTop: "60px" }}>
            <Grid item xs>
              <AddHeaders
                header="Button Shape"
                icon={<img src={smartButtonIcon} />}
              />
            </Grid>
            <RadioGroup
              value={shape}
              onChange={handleShapeChange}
              style={{ width: "100%" }}
            >
              <Grid
                container
                xs={12}
                style={{ marginTop: "30px", marginBottom: "50px" }}
              >
                <Grid item xs={6} className={classes.shapeContainer}>
                  <FormControlLabel
                    value="img"
                    control={
                      <Radio
                        color="primary"
                        value="1"
                        classes={{ root: classes.radio }}
                      />
                    }
                    label="Round"
                  />
                  <img src={roundedExample} alt="Rounded" />
                </Grid>
                <Grid item xs={6} className={classes.shapeContainer}>
                  <FormControlLabel
                    value="img"
                    control={
                      <Radio
                        color="primary"
                        value="2"
                        classes={{ root: classes.radio }}
                      />
                    }
                    label="Pill"
                  />
                  <img
                    src={pilleddExample}
                    alt="Pilled"
                    style={{ marginTop: "48px" }}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default NewThemeDialog;
