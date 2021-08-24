import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Icons
import { Close, MailOutlined } from "@material-ui/icons";
import SheetSm from "../../assets/sheetSm.svg";
import earthIcon from "../../assets/earth.png";
import CurrencyIcon from "../../assets/currencyIcon.svg";

const useStyle = makeStyles((theme) => ({
  section: {
    "& > *": {
      maxWidth: "510px",
    },
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    fontSize: "18px",
    color: "#181818",
    "& img": {
      marginRight: "8px",
    },
  },
  subTitle: {
    fontSize: "14px",
    color: "#5c5d5c",
    // marginTop: "8px",
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
  statusSelect: {
    height: "43px",
  },
  autocomplete: {
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  },
}));

const GeneralSettigns = () => {
  const classes = useStyle();
  const [country, setCountry] = useState(1);
  const langs = [
    { id: 1, title: "English" },
    { id: 2, title: "Arabic" },
  ];
  const [currency, setCurrency] = useState(1);
  const matches = useMediaQuery("(min-width:525px)");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Grid container spacing={2} display="flex">
      <Grid item xs={6} className={classes.section}>
        <Box
          className={classes.settingsSection}
          display="flex"
          flexDirection="column"
          marginBottom="24px"
        >
          <Typography classes={{ root: classes.sectionTitle }}>
            <img src={SheetSm} alt="" />
            General Information
          </Typography>
          <Typography classes={{ root: classes.subTitle }}>
            Set your general informations
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>
              Business Name
            </InputLabel>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              placeholder="Business Name"
              classes={{ root: classes.inputField }}
              InputProps={{
                inputProps: { style: { height: "100%" } },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>Address</InputLabel>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              classes={{ root: classes.inputField }}
              multiline
              rows={5}
              placeholder="Enter venue address"
              InputProps={{
                inputProps: { style: { height: "100%" } },
              }}
            />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <InputLabel className={classes.inputLabel}>City</InputLabel>
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                placeholder="City"
                classes={{ root: classes.inputField }}
                InputProps={{
                  inputProps: { style: { height: "100%" } },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel className={classes.inputLabel}>State</InputLabel>
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                placeholder="State"
                classes={{ root: classes.inputField }}
                InputProps={{
                  inputProps: { style: { height: "100%" } },
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>Country</InputLabel>
            <Select
              fullWidth
              autoWidth={!matches}
              id="status"
              variant="outlined"
              value={country}
              onChange={handleChange}
              className={classes.statusSelect}
              MenuProps={{
                classes: { paper: "custom-selectMenu" },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value={1}>Ukraine</MenuItem>
              <MenuItem value={2}>C 2</MenuItem>
              <MenuItem value={3}>C 3</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.section}>
        <Box
          className={classes.settingsSection}
          display="flex"
          flexDirection="column"
          marginBottom="24px"
        >
          <Typography classes={{ root: classes.sectionTitle }}>
            <img src={earthIcon} alt="" width="22px" height="22px" />
            Language
          </Typography>
          <Typography classes={{ root: classes.subTitle }}>
            Set your default language and other languages
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>
              Default Language
            </InputLabel>
            <Select
              fullWidth
              autoWidth={!matches}
              id="status"
              variant="outlined"
              value={country}
              onChange={handleChange}
              className={classes.statusSelect}
              MenuProps={{
                classes: { paper: "custom-selectMenu" },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value={1}>English</MenuItem>
              <MenuItem value={2}>C 2</MenuItem>
              <MenuItem value={3}>C 3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel className={classes.inputLabel}>
              Other Languages
            </InputLabel>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={langs}
              // className={classes.statusSelect}
              classes={{ inputRoot: classes.autocomplete }}
              getOptionLabel={(option) => option.title}
              defaultValue={[langs[0], langs[1]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  helperText="To translate your menu in the chosen languages, go to Menus > Localize."
                  {...params}
                  variant="outlined"
                />
              )}
              ChipProps={{ deleteIcon: <Close /> }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              className={classes.settingsSection}
              display="flex"
              flexDirection="column"
              marginBottom="24px"
              marginTop="16px"
            >
              <Typography classes={{ root: classes.sectionTitle }}>
                {/* <img src={earthIcon} alt="" width="22px" height="22px" /> */}
                <MailOutlined
                  style={{ marginRight: "8px", color: "#323232" }}
                />
                Feedback Email
              </Typography>
            </Box>
            <Grid item xs={12}>
              <InputLabel className={classes.inputLabel}>
                Default email that will receive survey results
              </InputLabel>
              <Autocomplete
                id="tags-outlined"
                multiple
                classes={{ inputRoot: classes.autocomplete }}
                options={[]}
                freeSolo
                renderInput={(params) => (
                  <TextField
                    helperText="To translate your menu in the chosen languages, go to Menus > Localize."
                    {...params}
                    variant="outlined"
                  />
                )}
                ChipProps={{ deleteIcon: <Close /> }}
              />
              {/* <TextField
                fullWidth
                type="text"
                variant="outlined"
                placeholder="Type your email address"
                classes={{ root: classes.inputField }}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Box
                className={classes.settingsSection}
                display="flex"
                flexDirection="column"
                marginBottom="24px"
                marginTop="16px"
              >
                <Typography classes={{ root: classes.sectionTitle }}>
                  <img src={CurrencyIcon} alt="" />
                  Currency
                </Typography>
                <Typography classes={{ root: classes.subTitle }}>
                  Set your default currency
                </Typography>
              </Box>
              <Grid item xs={12}>
                <InputLabel className={classes.inputLabel}>Currency</InputLabel>
                <Select
                  fullWidth
                  autoWidth={!matches}
                  id="status"
                  variant="outlined"
                  value={currency}
                  onChange={handleChange}
                  className={classes.statusSelect}
                  MenuProps={{
                    classes: { paper: "custom-selectMenu" },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "center",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "center",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={1}>USD</MenuItem>
                  <MenuItem value={2}>C 2</MenuItem>
                  <MenuItem value={3}>C 3</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GeneralSettigns;
