import { Dialog, DialogContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import publish from "../assets/publish.png";

const useStyles = makeStyles((theme) => ({
  leftSide: {
    paddingTop: "24px",
    paddingBottom: "36px",
  },
}));

const PublishPopUp = ({ open, onClose }) => {
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
          <img src={publish} alt="published" style={{ marginBottom: "35px" }} />
          <Typography variant="h1">Published Successfully</Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PublishPopUp;
