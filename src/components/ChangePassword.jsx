import {
  Grid,
  TextField,
  InputLabel,
  Button,
  Modal,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Close from "./Icons/Close";

const useStyle = makeStyles((theme) => ({
  inputLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    lineHeight: "22px",
    fontWeight: "400",
    color: "#181818",
    width: "100%",
    opacity: "0.7",
  },
  button: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "17px",
    letterSpacing: "0px",
    textAlign: "left",
    paddingInline: "32px",
    paddingBlock: "12px",
    borderRadius: "8px",
    width: "190px",
    height: "48px",
  },
  modal: {
    overflow: "auto",
  },
  wrapper: {
    top: "50%",
    left: "50%",
    position: "absolute",
    borderRadius: "8px",
    background: "#FFFFFF",
    padding: theme.spacing(2, 4, 3),
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "696px",
    overflow: "auto",
  },
  modalTitle: {
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "36px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  modalSubTitle: {
    fontSize: "14px",
    lineHeight: "17px",
    opacity: "0.7",
    color: "#181818",
    marginTop: "8px",
  },
  titleContainer: {
    display: "flex",
    marginBottom: "18px",
    flexDirection: "column",
    minWidth: "600px",
  },
  formGroup: {
    width: "100%",
    marginBottom: "16px",
    minWidth: "600px",
  },
  close: {
    padding: 0,
    border: "none",
    outline: "none",
    cursor: "pointer",
    background: "transparent",
    // position: "absolute",
    right: "13px",
    top: "13px",
  },
  inputFiled: {
    width: "100%",
    height: "33px",
    borderRadius: "4px",
    padding: "8px 12px 8px 12px",
    background: "transparent",
    "& > input": {
      background: "transparent",
      fontSize: "14px",
    },
  },
}));

const PasswordModal = ({ open, onCloseModal }) => {
  const classes = useStyle();

  return (
    <Modal open={open} onClose={onCloseModal}>
      <Grid container className={classes.modal}>
        <Grid container className={classes.wrapper}>
          <Grid
            container
            xs={12}
            justify-content="center"
            style={{
              minWidth: "600px",
              flexWrap: "nowrap",
              display: "flex",
              alignItems: "start",
            }}
          >
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography className={classes.modalTitle}>
                Reset Your Password
              </Typography>
              <Typography className={classes.modalSubTitle}>
                Enter your new password.
              </Typography>
            </Grid>
            <button onClick={onCloseModal} className={classes.close}>
              <Close />
            </button>
          </Grid>
          <Grid item xs={12} className={classes.formGroup}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item={4}>
                <Typography className={classes.inputLabel}>
                  Current Password
                </Typography>
              </Grid>
              <Grid item={8} style={{ width: "70%" }}>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  placeholder="**********"
                  InputProps={{
                    className: classes.inputFiled,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.formGroup}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item={4}>
                <Typography className={classes.inputLabel}>
                  New Password
                </Typography>
              </Grid>
              <Grid item={8} style={{ width: "70%" }}>
                <TextField
                  type="password"
                  fullWidth
                  variant="outlined"
                  placeholder="**********"
                  InputProps={{
                    className: classes.inputFiled,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.formGroup}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item={4}>
                <Typography className={classes.inputLabel}>
                  Repeat New Password
                </Typography>
              </Grid>
              <Grid item={8} style={{ width: "70%" }}>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  placeholder="Repeat your new password"
                  InputProps={{
                    className: classes.inputFiled,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            style={{ marginTop: "16px", minWidth: "600px" }}
          >
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
            >
              Reset Password
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default PasswordModal;
