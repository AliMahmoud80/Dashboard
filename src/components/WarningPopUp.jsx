import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import warning from "../assets/warning.png";

const useStyles = makeStyles((theme) => ({
  leftSide: {
    paddingTop: "24px",
    paddingBottom: "17px",
  },
  paragraph: {
    fontSize: "24px",
    maxWidth: "504px",
    textAlign: "center",
    fontWeight: "300",
    lineHeight: "29px",
    color: "#181818",
    marginTop: "2px",
  },
  btnContainer: {
    marginTop: "23px",
  },
}));

const PublishPopUp = ({ open, onClose, onBtnClick }) => {
  const classes = useStyles();

  return (
    <Dialog
      scroll="body"
      open={open}
      fullWidth={true}
      onClose={onClose}
      maxWidth="sm"
    >
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          xs={12}
          className={classes.leftSide}
        >
          <img src={warning} alt="published" style={{ marginBottom: "35px" }} />
          <Typography variant="h1">Warning!</Typography>
          <Typography variant="p" className={classes.paragraph}>
            You have unsaved changes. Are you sure you want to navigate away?
          </Typography>
          <Box className={classes.btnContainer}>
            <Button
              variant="outlined"
              style={{ fontWeight: "normal", marginRight: "20px" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={onBtnClick}
              variant="contained"
              color="primary"
              style={{ padding: "8px 6px" }}
            >
              OK Navigate
            </Button>
          </Box>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PublishPopUp;
