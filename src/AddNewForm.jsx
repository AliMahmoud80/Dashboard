import { useState, useEffect } from "react";
// Components
import Sidebar from "./components/Sidebar";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Topbar from "./components/Topbar";
import SingleFormItem from "./components/SingleFormItem";
import chevronLeft from "./assets/chevronLeft.svg";
import WarningPopUp from "./components/WarningPopUp";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  formsContainer: {
    display: "flex",
  },
  simpleForm: {
    paddingRight: "0",
    paddingTop: "24px",
    paddingLeft: "24px",
  },
  questionForm: {
    padding: "24px 32px 24px 32px",
  },
  formTitle: {
    color: "#5c5c5d",
    fontWeight: "500",
    marginBottom: "10px",
  },
  InputField: {
    "& .MuiOutlinedInput-input": {
      padding: "10.5px 12px",
    },
  },

  mainTextArea: {
    padding: "8px 12px",
    fontSize: "16px",
    borderColor: "#EDEBE9",
    borderRadius: "0px 0px 4px 4px",
    maxWidth: "100%",
    minWidth: "100%",
    minHeight: "151px",
    maxHeight: "151px",
    boxSizing: "border-box",
  },

  addQuestion: {
    width: "100%",
    margin: "0 auto",
  },
}));

const AddNewForm = () => {
  const classes = useStyles();
  const handleShowUpdated = () => {
    swal({
      title: "Updated successfully",
      icon: "success",
      buttons: false,
    });
  };
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    swal({
      title: "Warning!",
      icon: "warning",
      text: "You have unsaved changes. Are you sure you want to navigate away?",
      buttons: ["Cancel", "OK Navigate"],
    });
  };
  const handleHideWarning = () => {
    setShowWarning(false);
  };

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <Grid item direction="column" xs>
        <Grid container className={classes.AddNewFormContainer}>
          <Grid item xs={12}>
            <Topbar
              title="Add New Form"
              btnTitle="Save"
              leftIcon={chevronLeft}
              link="/feedback"
              leftLink="/feedback"
              btnCancel="Cancel"
              isBtn={true}
              onBtnClick={handleShowUpdated}
              onBtnCancel={handleShowWarning}
            />
          </Grid>
          <Grid container className={classes.formsContainer} xs={12}>
            <Grid item xs={3} className={classes.simpleForm}>
              <FormControl fullWidth style={{ marginBottom: "30px" }}>
                <Typography variant="h3" className={classes.formTitle}>
                  Form Name
                </Typography>
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
              </FormControl>
              <FormControl fullWidth>
                <Typography variant="h3" className={classes.formTitle}>
                  Form Description
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={7}
                  className={classes.mainTextArea}
                />
              </FormControl>
            </Grid>
            <Grid item xs={9} className={classes.questionForm}>
              <SingleFormItem />
              <SingleFormItem />
              <SingleFormItem />
              <SingleFormItem />
              <Button className={classes.addQuestion}>
                <Typography variant="h3" color="primary">
                  Add Question
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <WarningPopUp open={showWarning} onClose={handleHideWarning} />
    </Grid>
  );
};

export default AddNewForm;
