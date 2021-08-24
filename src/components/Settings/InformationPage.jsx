import { Grid, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import snapchat from "../../assets/snapchat.svg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";
import website from "../../assets/website.svg";
import Social from "../Social";
import Upload from "./Upload";
import Uploader from "../Uploader";

const useStyle = makeStyles((theme) => ({
  section: {},
  input: {
    width: "477px",
    // border: "1px solid #EDEBE9",
  },
  inputLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#5c5c5d",
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "19px",
    letterSpacing: "0px",
    minWidth: "190px",
    marginRight: "0",
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
  noBorder: {
    border: "none",
  },
  upload: {
    width: "200px",
    height: "200px",
    border: "1px dashed #0078D3",
    borderRadius: "4px",
    marginLeft: "40px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  },
  uploader: {
    maxWidth: "200px",
    maxHeight: "200px",
    alignSelf: "flex-start",

    "& img": {
      maxHeight: "200px",
    },
  },
  title: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "16px",
    color: "#5c5c5d",
  },
}));

const InformationPage = () => {
  const classes = useStyle();

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <Grid container>
          <Grid
            xs={12}
            item
            style={{ display: "flex" }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography className={classes.inputLabel}>
              Info Page Title
            </Typography>
            <TextField
              variant="outlined"
              style={{ height: "40px" }}
              className={classes.input}
              placeholder="Welcome to Information Page"
              classes={{ notchedOutline: classes.noBorder }}
            />
          </Grid>
          <Grid
            xs={12}
            item
            style={{ display: "flex", marginTop: "40px" }}
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography className={classes.inputLabel}>
              Info Page Title
            </Typography>
            <TextField
              multiline
              rows={5}
              type="text"
              variant="outlined"
              className={classes.input}
              classes={{ root: classes.inputField }}
              placeholder="This is example of description of the S’mores. You can try this! This is example of description of the S’mores. You can try this!"
            />
          </Grid>
          <Grid
            xs={12}
            item
            style={{ display: "flex", marginTop: "35px" }}
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography className={classes.inputLabel}>
              Info Page Image
            </Typography>
            {/* <Upload /> */}
            <Grid item xs style={{ maxWidth: "200px" }}>
              <Uploader rootClass={classes.uploader} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.title} variant="h5">
          Social Media, Phone, and Website
        </Typography>
        <Social
          icon={snapchat}
          title="snapchat"
          placeholder="snapchat.com/add/salahluqimaty"
        />
        <Social
          icon={instagram}
          title="Instagram"
          placeholder="instagram.com/salahluqimaty"
        />
        <Social
          icon={facebook}
          title="facebook"
          placeholder="facebook.com/salahluqimaty"
        />
        <Social icon={phone} title="phone" placeholder="+031123123213" />
        <Social icon={website} title="website" placeholder="www.luqimaty.com" />
      </Grid>
    </Grid>
  );
};

export default InformationPage;
