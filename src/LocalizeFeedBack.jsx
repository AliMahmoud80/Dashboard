import { useState } from "react";
import { Grid, Box, Typography, TextField, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Topbar from "./components/Topbar";
import leftarrow from "./assets/left-arrow.png";
import Sidebar from "./components/Sidebar";
import chevronLeft from "./assets/chevronLeft.svg";
import UpdatedPopUp from "./components/UpdatedPopUp";
import WarningPopUp from "./components/WarningPopUp";
import swal from "sweetalert";

const useStyles = makeStyles(() => ({
  localizeContainer: {
    backgroundColor: "white",
    padding: "24px",
    display: "flex",
    justifyContent: "space-between",
    height: "calc(100% - 105px)",
    boxSizing: "border-box",
    paddingBottom: "10px",
  },
  localizeForm: {
    backgroundColor: "white",
    border: "1px solid #EDEBE9",
    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.04)",
    borderRadius: "6px",
    minHeight: "840px",
    height: "100%",
  },
  localizeFormHeader: {
    borderBottom: "1px solid #EDEBE9",

    padding: "16px 16px 24px 16px",
  },
  localizeFormTitle: {
    fontWeight: "600",
    marginBottom: "8px",
  },
  localizeFormSubTitle: {
    fontWeight: "400",
  },
  localizeFormSwitchTitle: {
    marginRight: "8px",
    fontWeight: "400",
  },
  inputFieldContainer: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  InputField: {
    marginBottom: "16px",
    "& .MuiOutlinedInput-input": {
      padding: "11.5px 12px",
      fontSize: "16px",
      color: "black",
    },
  },
}));
const LocalizeFeedBack = () => {
  const classes = useStyles();
  const [showUpdated, setShowUpdated] = useState(false);
  const handleShowUpdated = () => {
    swal({
      title: "Updated successfully",
      icon: "success",
      buttons: false,
    });
  };
  const handleHideUpdated = () => {
    setShowUpdated(false);
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
      <Sidebar />
      <Grid item direction="column" xs>
        {/* <Grid container> */}
        <Grid item xs={12}>
          <Topbar
            title="Localize"
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
        <Grid item xs={12} className={classes.localizeContainer}>
          <Grid item xs={6} style={{ paddingRight: "12px" }}>
            <Box className={classes.localizeForm}>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.localizeFormHeader}
              >
                <Box flexDirection="column">
                  <Typography
                    variant="h2"
                    className={classes.localizeFormTitle}
                  >
                    English
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.localizeFormSubTitle}
                  >
                    Default Language
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    variant="h3"
                    className={classes.localizeFormSwitchTitle}
                  >
                    Show
                  </Typography>
                  <Switch />
                </Box>
              </Box>

              <Box mt={3} className={classes.inputFieldContainer}>
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "12px" }}>
            <Box className={classes.localizeForm}>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.localizeFormHeader}
              >
                <Box flexDirection="column">
                  <Typography
                    variant="h2"
                    className={classes.localizeFormTitle}
                  >
                    English
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.localizeFormSubTitle}
                  >
                    Default Language
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    variant="h3"
                    className={classes.localizeFormSwitchTitle}
                  >
                    Show
                  </Typography>
                  <Switch />
                </Box>
              </Box>
              <Box mt={3} className={classes.inputFieldContainer}>
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
                <TextField
                  id="outlined-full-width"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  classes={{ root: classes.InputField }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <UpdatedPopUp open={showUpdated} onClose={handleHideUpdated} />
      <WarningPopUp open={showWarning} onClose={handleHideWarning} />
    </Grid>
    // </Grid>
  );
};

export default LocalizeFeedBack;
