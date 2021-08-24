import { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
// Components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
// Icons
import logo from "../assets/categoriesIcon/logo.png";
import dashboardIcon from "../assets/dashboard.svg";
import Design from "../assets/categoriesIcon/Design.svg";
import Feedback from "../assets/categoriesIcon/feedback.svg";
import Modifier from "../assets/categoriesIcon/modifier.svg";
import Banner from "../assets/categoriesIcon/Banner.svg";
import qrCode from "../assets/categoriesIcon/qr_code.png";
import eye from "../assets/categoriesIcon/remove_red_eye.png";
import publishIcon from "../assets/categoriesIcon/publishIcon.svg";
import Settings from "../assets/categoriesIcon/settings.svg";
import activeUserImg from "../assets/activeUser.png";
import QrCodeDialog from "./QRCodeTablet";
import PublishDialog from "./PublishPopUp";
import { useSetPageLoading } from "../hooks/useSetPageLoading";
import { IconButton, Popover, Button } from "@material-ui/core";
import swal from "sweetalert";
// Icons
import { MoreHoriz, HelpOutline, ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "#fff",
    // height: "100%",
    minHeight: "100%",
    zIndex: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    // maxWidth: "250px",
    overflowY: "auto",
    flexFlow: "column",
    width: "100%",
    // position: "relative",
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
  },
  wrapper: {
    borderRight: "1px solid #D8D8D8",
    maxWidth: "250px",
    backgroundColor: "#fff",
    // height: "100%",
    minHeight: "100%",
    zIndex: "1000",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    // maxWidth: "250px",
    overflowY: "auto",
    flexFlow: "column",
  },
  brandContainer: {
    marginLeft: "28px",
    "& img": {
      marginRight: "9px",
    },
    "& h1": {
      fontSize: "25px",
      color: "#DC5C4B",
    },
  },
  linksContainer: {
    width: "100%",
    padding: "0 29px 0 16px",
    boxSizing: "border-box",
  },
  linksTitle: {
    marginLeft: "12px",
    marginBottom: "8px",
    color: "#969696",
    textTransform: "uppercase",
  },
  link: {
    color: "#585757",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: "8px",
    fontWeight: "400",
    fontSize: "16px",

    "&:hover": {
      color: "#585757",
    },
    "& img": {
      width: "24px",
      height: "24px",
      marginRight: "12px",
    },
  },
  activeLink: {
    backgroundColor: "rgb(0,133,255, 0.1)",
    color: "#1C1C1C",
    fontWeight: "500",

    "& img": {
      filter:
        "invert(45%) sepia(84%) saturate(4415%) hue-rotate(187deg) brightness(87%) contrast(101%)",
    },
    "&:hover": {
      color: "#1C1C1C",
    },
  },
  usersSection: {
    borderTop: "1px solid #EDEBE9",
    width: "100%",
    boxSizeing: "border-box",
  },
  activeUser: {
    padding: "19px 16px",

    "& img": {
      width: "32px",
      height: "32px",
      marginRight: "14px",
    },
  },
  userDetails: {
    width: "100%",
    fontSize: "16px",
    color: "#B0B0B0",
  },
  userName: {
    display: "flex",
    color: "#585757",
    justifyContent: "space-between",
  },
  menuBtn: {
    padding: "0",
  },
  popoverBtns: {
    display: "flex",
    flexDirection: "column",
  },
  popBtn: {
    color: "#181818",
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "0",
  },
  logoLink: {
    textDecoration: "none",
  },
  userMenu: {
    borderRadius: "8px",
    overflow: "unset",
  },
}));

const mainMenuLinks = [
  {
    title: "Menu",
    icon: dashboardIcon,
    link: "/categories",
  },
  {
    title: "Design",
    icon: Design,
    link: "/design",
  },
  {
    title: "Feedback",
    icon: Feedback,
    link: "/feedback",
  },
  {
    title: "Modifier",
    icon: Modifier,
    link: "/modifier",
  },
  {
    title: "Banner",
    icon: Banner,
    link: "/banner",
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [qrDialog, setQRDialog] = useState(false);
  const [publishDialog, setPublishDialog] = useState(false);
  const setPageIsLoading = useSetPageLoading();
  const [popover, setPopover] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPopover(true);
  };

  const handlePopoverClose = () => {
    setPopover(false);
  };

  const handleOpenQr = () => {
    setQRDialog(true);
  };
  const handleCloseQr = () => {
    setQRDialog(false);
  };
  const handleOpenPublish = () => {
    setPublishDialog(true);
  };
  const handleClosePublish = () => {
    setPublishDialog(false);
  };
  const handleShowUpdated = () => {
    swal({
      title: "Updated successfully",
      icon: "success",
      buttons: false,
    });
  };

  const generalLinks = [
    {
      title: "QR-code",
      icon: qrCode,
      action: handleOpenQr,
    },
    {
      title: "View menu",
      icon: eye,
      link: "/menu",
    },
    {
      title: "Publish",
      icon: publishIcon,
      action: handleShowUpdated,
    },
    {
      title: "Settings",
      icon: Settings,
      link: "/settings",
    },
  ];

  return (
    <Grid container className={classes.sidebar}>
      <Grid container className={classes.wrapper}>
        <Link to="/" className={classes.logoLink}>
          <Box
            className={classes.brandContainer}
            display="flex"
            alignItems="center"
            marginTop="23px"
            fullWidth
          >
            <img src={logo} width="49px" height="49px" alt="Cloud Menu" />
            <Typography variant="h1">Cloud Menu</Typography>
          </Box>
        </Link>
        <Box
          className={classes.linksContainer}
          display="flex"
          justifyContent="start"
          marginTop="28px"
          flexDirection="column"
        >
          <Typography className={classes.linksTitle} variant="h5">
            main menu
          </Typography>
          {mainMenuLinks.map((link) => (
            <Link
              className={`${classes.link} ${
                location.pathname === link.link ? classes.activeLink : ""
              }`}
              to={link.link}
              onClick={() => setPageIsLoading(true)}
            >
              <img src={link.icon} alt="Menu" />
              {link.title}
            </Link>
          ))}
        </Box>
        <Box
          marginTop="10px"
          className={classes.linksContainer}
          display="flex"
          justifyContent="start"
          flexDirection="column"
        >
          <Typography className={classes.linksTitle} variant="h5">
            General
          </Typography>
          {generalLinks.map((link) => (
            <Link
              className={`${classes.link} ${
                location.pathname === link.link ? classes.activeLink : ""
              }`}
              to={link.link}
              onClick={link.action}
            >
              <img src={link.icon} alt="Menu" />
              {link.title}
            </Link>
          ))}
        </Box>
        <Box
          className={classes.usersSection}
          display="flex"
          flexDirection="column"
          marginTop="120px"
        >
          <Box className={classes.activeUser} display="flex">
            <img src={activeUserImg} alt="user" />
            <Box className={classes.userDetails}>
              <Box className={classes.userName}>
                <Typography>Pizza Hot</Typography>
                <IconButton
                  variant="text"
                  color="default"
                  className={classes.menuBtn}
                  onClick={handleClick}
                >
                  <MoreHoriz />
                </IconButton>
                <Popover
                  open={popover}
                  anchorEl={anchorEl}
                  onClose={handlePopoverClose}
                  classes={{ paper: classes.userMenu }}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  style={{
                    marginTop: "45px",
                    marginLeft: "10px",
                  }}
                >
                  <span className="arrow-left"></span>
                  <Box
                    className={classes.activeUser}
                    style={{ padding: "10px", marginBottom: "57px" }}
                    display="flex"
                  >
                    <img src={activeUserImg} alt="user" />
                    <Box className={classes.userDetails}>
                      <Box className={classes.userName}>
                        <Typography>Pizza Hot</Typography>
                      </Box>
                      <Typography>Pizzahot@gmail.com</Typography>
                    </Box>
                  </Box>
                  <Box className={classes.popoverBtns}>
                    <Button className={classes.popBtn}>
                      <HelpOutline
                        style={{ color: "#666666", marginRight: "10px" }}
                      />
                      Support
                    </Button>
                    <Button
                      className={classes.popBtn}
                      style={{ marginBottom: "16px" }}
                    >
                      <ExitToApp
                        style={{ color: "#666666", marginRight: "10px" }}
                      />
                      Logout
                    </Button>
                  </Box>
                </Popover>
              </Box>
              <Typography>Pizzahot@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <QrCodeDialog open={qrDialog} onClose={handleCloseQr} />
      <PublishDialog open={publishDialog} onClose={handleClosePublish} />
    </Grid>
  );
};

export default memo(Sidebar);
