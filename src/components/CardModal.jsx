import { Grid, TextField, Button, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Close from "./Icons/Close";

const useStyle = makeStyles((theme) => ({
  inputLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#5c5c5d",
    width: "100%",
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
  },
  modal: {
    // minWidth: "696px",
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
  titleContainer: {
    display: "flex",
    marginBottom: "24px",
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
    // position: 'absolute',
    // top: '13px',
    // right: '13px'
  },
  inputFiled: {
    // width: "100%",
    height: "43px",
    borderRadius: "4px",
    padding: "8px 12px 8px 12px",
    background: "transparent",
    "& > input": {
      background: "transparent",
    },
  },
}));

const CardModal = ({ open, onCloseModal }) => {
  const classes = useStyle();

  return (
    <Modal open={open} onClose={onCloseModal}>
      <Grid container className={classes.modal}>
        <Grid container className={classes.wrapper}>
          <Grid
            item
            xs={12}
            className={classes.titleContainer}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography className={classes.modalTitle}>Add New Card</Typography>
            <button onClick={onCloseModal} className={classes.close}>
              <Close />
            </button>
          </Grid>
          <Grid item xs={12} className={classes.formGroup}>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Grid item={4}>
                <Typography className={classes.inputLabel}>
                  Card Holder Name
                </Typography>
              </Grid>
              <Grid item={8} style={{ width: "100%" }}>
                <TextField
                  fullWidth
                  type="text"
                  variant="outlined"
                  placeholder="Card Holder Name"
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
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Grid item xs={4}>
                <Typography className={classes.inputLabel}>
                  Card Number
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ width: "100%" }}>
                <TextField
                  type="text"
                  fullWidth
                  variant="outlined"
                  placeholder="Card Number"
                  InputProps={{
                    className: classes.inputFiled,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} className={classes.formGroup}>
            <Grid
              style={{
                marginRight: "30px",
                minWidth: "260px",
              }}
              item
              xs={6}
              className={classes.formGroup}
            >
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Grid item={4}>
                  <Typography className={classes.inputLabel}>
                    Expiry Date
                  </Typography>
                </Grid>
                <Grid item={8}>
                  <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="MM/YYYY"
                    InputProps={{
                      className: classes.inputFiled,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs
              className={classes.formGroup}
              style={{
                minWidth: "166px",
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Grid item={4}>
                  <Typography className={classes.inputLabel}>
                    Card CVV Code
                  </Typography>
                </Grid>
                <Grid item={8}>
                  <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="CVV"
                    InputProps={{
                      className: classes.inputFiled,
                    }}
                  />
                </Grid>
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
              Add Card
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CardModal;
