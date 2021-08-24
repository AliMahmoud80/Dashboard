import { useState, useEffect } from "react";

// Components
import Sidebar from "./components/Sidebar";
import {
  Grid,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SwitchAnt from "./components/swtichAnt";
import Topbar from "./components/Topbar";
import leftarrow from "./assets/left-arrow.png";
// For Sidebar
import LocalizeSideBar from "./components/LocalizeSideBar";
import chevronLeft from "./assets/chevronLeft.svg";

const useStyles = makeStyles(() => ({
  categoriesMenu: {
    borderRight: "1px solid #EDEBE9",
    padding: "24px 26px 0 16px",
    height: "100%",
  },
  categoriesMenuSubTitle: {
    fontWeight: "600",
    paddingTop: "24px",
    paddingBottom: "16px",
  },
  accordionStyle: {
    backgroundColor: "transparent",
    padding: "0",
    boxShadow: "none",
  },
  dropdownTitle: {
    fontWeight: "600",
    marginRight: "auto",
    marginLeft: "12px",
  },

  dropDownInnerContainer: {
    width: "100%",
  },
  dropDownInnerContainer__list: {
    paddingLeft: "7px",
  },
  dropdownTitleInner: {
    fontWeight: "500",
    paddingLeft: "14px",
  },
  localizeContainer: {
    backgroundColor: "white",
    padding: "24px",
    height: "100%",
  },
  "@media screen and (max-width: 1440px)": {
    localizeContainer: {
      paddingBottom: "0",
    },
  },
  localizeForm: {
    backgroundColor: "white",
    border: "1px solid #EDEBE9",
    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.04)",
    borderRadius: "6px",
    minHeight: "840px",
    marginRight: "24px",
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
  formTitle: {
    color: "#5d5d5d",
    marginBottom: "10px",
  },
  mainTextArea: {
    padding: "8px 12px",
    fontSize: "16px",
    borderColor: "#EDEBE9",
    borderRadius: "0px 0px 4px 4px",
  },
}));

const LocalizeExtra = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(true);
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState({
    checkedC: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const toggleMenu = () => {
    setShowMenu((m) => !m);
  };
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <Grid item xs direction="column">
        <Grid container>
          <Topbar
            title="Localize"
            leftIcon={chevronLeft}
            onBurgerClick={toggleMenu}
            link="/categories"
            btnTitle="Save"
          />
        </Grid>
        <Grid container style={{ height: "calc(100% - 81px)" }}>
          <Grid xs={3} style={{ maxWidth: "250px", height: "100%" }}>
            <LocalizeSideBar />
          </Grid>
          <Grid item xs>
            <Grid container className={classes.localizeContainer}>
              <Grid item xs={4} className={classes.localizeForm}>
                <Box>
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
                      <SwitchAnt handleSwitch={(e) => {}} />
                    </Box>
                  </Box>

                  <Box mt={3} className={classes.inputFieldContainer}>
                    <FormControl fullWidth style={{ marginBottom: "24px" }}>
                      <Typography variant="h3" className={classes.formTitle}>
                        Name
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
                    <FormControl fullWidth style={{ marginBottom: "24px" }}>
                      <Typography variant="h3" className={classes.formTitle}>
                        Extra #1
                      </Typography>
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={7}
                        className={classes.mainTextArea}
                        style={{
                          maxWidth: "100%",
                          minWidth: "100%",
                          boxSizing: "border-box",
                          maxHeight: "150px",
                          minHeight: "150px",
                        }}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Typography variant="h3" className={classes.formTitle}>
                        Extra #2
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
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4} className={classes.localizeForm}>
                <Box>
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
                      <SwitchAnt handleSwitch={(e) => {}} />
                    </Box>
                  </Box>

                  <Box mt={3} className={classes.inputFieldContainer}>
                    <FormControl fullWidth style={{ marginBottom: "24px" }}>
                      <Typography variant="h3" className={classes.formTitle}>
                        Name
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
                    <FormControl fullWidth style={{ marginBottom: "24px" }}>
                      <Typography variant="h3" className={classes.formTitle}>
                        Extra #1
                      </Typography>
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={7}
                        className={classes.mainTextArea}
                        style={{
                          maxWidth: "100%",
                          minWidth: "100%",
                          boxSizing: "border-box",
                          maxHeight: "150px",
                          minHeight: "150px",
                        }}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Typography variant="h3" className={classes.formTitle}>
                        Extra #2
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
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LocalizeExtra;
