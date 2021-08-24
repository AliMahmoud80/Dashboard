import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  InputLabel,
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import copy from "../assets/doubleSheetIcon.svg";
import qr from "../assets/qrmobile.png";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "21px 19px 18px 32px",
    alignItems: "center",
    minWidth: "551px",
    overflow: "auto",
    borderBottom: "1px solid #EDEBE9",
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
  inputField: {
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
  leftSide: {
    paddingLeft: "8px",
  },
  addHeaders: {
    alignItems: "center",
    flexWrap: "nowrap",
  },
  addImage: {
    marginTop: "16px",
    maxWidth: "300px",
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
    padding: "0",
    minWidth: "551px",
    overflow: "auto",
  },
  formLabel: {
    ...theme.typography.formLabel,
    fontSize: "16px",
  },
  formInputContainer: {
    marginTop: "24px",
    marginBottom: "18px",
  },
  uploader: {
    width: "298px",
    height: "298px",
  },
  clicked: {
    backgroundColor: "#0078D3 !important",
    color: "white !important",
  },
  Tablet: {
    backgroundColor: "#FDFDFD",
    color: "#666666",
    opacity: 1,
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    width: "90px",
    minHeight: "36px",
    fontSize: "12px",
    fontWeight: 500,
    border: "1px solid #EDEBE9",
    borderRight: "0",
  },
  Mobile: {
    backgroundColor: "#FDFDFD",
    color: "#666666",
    opacity: 1,
    fontSize: "12px",
    fontWeight: 500,
    width: "90px",
    minHeight: "36px",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    border: "1px solid #EDEBE9",
    borderLeft: "0",
  },
  ID: {
    fontWeight: 400,
    lineHeight: "21.78px",
  },
  copySection: {
    marginBottom: "24px",
  },
  buttonContainer: {
    borderTop: "1px solid #EDEBE9",
    paddingTop: "24px",
    marginTop: "104px",
  },
  buttonContainerSecondPanel: {
    borderTop: "1px solid #EDEBE9",
    paddingTop: "24px",
    marginTop: "10px",
  },
  qrTitle: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19.36px",
    color: "#0078D3",
    marginTop: "16px",
  },
  TabPanelRoot: {
    padding: "0 !important",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const QRCodeTablet = ({ open, onClose }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      scroll="body"
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth="sm"
    >
      <Grid container classes={{ root: classes.header }}>
        <Typography variant="h1">Connect Your Device</Typography>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              classes={{ selected: classes.clicked }}
              className={classes.Tablet}
              label="Tablet"
              {...a11yProps(0)}
            />
            <Tab
              classes={{ selected: classes.clicked }}
              className={classes.Mobile}
              label="Mobile"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
      </Grid>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <TabPanel value={value} index={0}>
          <Grid
            container
            direction="column"
            xs={12}
            className={classes.leftSide}
          >
            <Typography className={classes.inputLabel}>Venue ID</Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.copySection}
            >
              <Typography variant="h2" className={classes.ID}>
                DRYxHxNZA
              </Typography>
              <img src={copy} alt="copy" />
            </Box>
            <Grid item xs={12}>
              <InputLabel className={classes.inputLabel}>PIN Code</InputLabel>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                placeholder="0000"
                classes={{ root: classes.inputField }}
                InputProps={{
                  inputProps: { style: { height: "100%" } },
                }}
              />
            </Grid>

            {/* <Box
              display="flex"
              justifyContent="space-between"
              className={classes.buttonContainer}
            >
              <Button
                style={{
                  fontWeight: "400",
                  height: "40px",
                  border: "1px solid #F3F2F1",
                }}
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: "88px",
                }}
              >
                Save
              </Button>
            </Box> */}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid
            container
            direction="column"
            xs={12}
            className={classes.leftSide}
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              <img src={qr} alt="QR" />
              <Typography className={classes.qrTitle}>
                cldn.mn/test-bro
              </Typography>
            </Box>
            {/* <Box
              display="flex"
              justifyContent="space-between"
              className={classes.buttonContainerSecondPanel}
            >
              <Button
                style={{
                  fontWeight: "400",
                  height: "40px",
                  border: "1px solid #F3F2F1",
                }}
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </Button>
            </Box> */}
          </Grid>
        </TabPanel>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.buttonContainer}
          style={{ padding: "24px", marginTop: value === 1 ? "10px" : "104px" }}
        >
          <Button
            style={{
              fontWeight: "400",
              height: "40px",
              border: "1px solid #F3F2F1",
            }}
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>
          {value === 0 && (
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "88px",
              }}
            >
              Save
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeTablet;
