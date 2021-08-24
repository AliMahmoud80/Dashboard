import { Grid, Typography, TextField, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CardTablet from "../CardTablet";
import walletIcon from "../../assets/Wallet.svg";
import qrCodeIcon from "../../assets/qr_code.svg";
import barcode from "../../assets/barcode.svg";
import ColorInput from "../ColorInput";

const useStyle = makeStyles((theme) => ({
  section: {},
  input: {
    width: "504px",
  },
  inputLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#5c5c5d",
    width: "100%",
  },
  inputLabel: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "19px",
    letterSpacing: "0px",
    color: "#181818",
  },
  inputField: {
    marginTop: "8px",
    "& input": {
      height: "0",
    },
    "& .MuiInputBase-root": {
      marginBottom: "24px",
      fontSize: "14px",
      color: "#000",
      minHeight: "43px",
    },
  },
  title: {
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  icon: {
    marginRight: "8px",
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0px",
    textAlign: "center",
    color: "#181818",
    marginTop: "29px",
  },
  url: {
    color: "#0078D3",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "19px",
    letterSpacing: "0px",
    textAlign: "center",
    marginTop: "16px",
  },
}));

const QRMenu = () => {
  const classes = useStyle();

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Grid container>
          <Grid item>
            <CardTablet
              marginBottom={24}
              name="Welcome Page"
              title="Display Venue Name"
              subTitle="Additional info for this setting can be placed here"
            >
              <img src={walletIcon} alt={"Welcome Page"} />
            </CardTablet>
          </Grid>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>
              Welcome Text (English)
            </InputLabel>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              className={classes.input}
              placeholder="Type your welcome text English"
              classes={{ root: classes.inputField }}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "7px" }}>
            <InputLabel className={classes.inputLabel}>
              Welcome Text (Arabic)
            </InputLabel>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              className={classes.input}
              placeholder="Type your welcome text Arabic"
              classes={{ root: classes.inputField }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          item
          alignItems="center"
          justifyContent="flex-start"
          style={{ display: "flex", marginBottom: "36px" }}
        >
          <img src={qrCodeIcon} alt="qrCodeIcon" className={classes.icon} />
          <Typography className={classes.title} variant="h5">
            Your Cloud Menu QR Code
          </Typography>
        </Grid>
        <Grid
          item
          alignItems="center"
          justifyContent="center"
          style={{ display: "flex" }}
        >
          <img src={barcode} alt="barcode" />
        </Grid>
        <Typography className={classes.subTitle} variant="subtitle2">
          Right click to save Cloud Menu QR to your computer.
        </Typography>
        <Typography className={classes.url}>cldn.mn/test-bro</Typography>
        <ColorInput title="QR Code Color" initialColor="#0078D3" />
        <div style={{ marginTop: "-22px" }}>
          <ColorInput title="QR Code Background Color" initialColor="#ECEBEB" />
        </div>
      </Grid>
    </Grid>
  );
};

export default QRMenu;
