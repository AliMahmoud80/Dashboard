import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardComp from "./components/CardComp";
// Components
import Sidebar from "./components/Sidebar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Topbar from "./components/Topbar";
// import leftarrow from "./assets/left-arrow.png";
import chevronLeft from "./assets/chevronLeft.svg";
import Button from "@material-ui/core/Button";
import earth from "./assets/earth.png";
import LocalizeSideBar from "./components/LocalizeSideBar";

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
  contentTitle: {
    margin: "24px 0px 8px",
    fontWeight: "600",
  },
  contentSubTitle: {
    marginBottom: "40px",
    fontWeight: "300",
  },
}));

const LocalizeLanguage = () => {
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
      {/* Categories Menu */}
      {/* Main Content */}
      <Grid item xs>
        <Grid item xs={12}>
          <Topbar
            title="Localize"
            leftIcon={chevronLeft}
            link="/addnewcategory"
          />
        </Grid>
        <Grid container style={{ height: "calc(100% - 69px)" }}>
          <Grid xs={3} style={{ maxWidth: "250px" }}>
            <LocalizeSideBar />
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={earth} alt="earth" />
              <Typography variant="h2" className={classes.contentTitle}>
                You only select English for your default language
              </Typography>
              <Typography variant="h4" className={classes.contentSubTitle}>
                Activate other languages that will be displayed on your menu in
                general settings
              </Typography>
              <Link to="/settings" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.contentButton}
                >
                  Go to General Settings
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LocalizeLanguage;
