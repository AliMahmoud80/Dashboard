import { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// Icons
import { MoreHoriz } from "@material-ui/icons";
import sheetIcon from "../assets/sheetIcon.svg";
import trashIcon from "../assets/trashIcon.svg";
import world from "../assets/world.png";
import editIcon from "../assets/editIcon.svg";
import DeletePopUp from "./DeletePopUp";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: " 0px 4px 16px 0px rgba(238, 238, 238, 1)",
    minWidth: "246px",
    position: "relative",
    "& .MuiCardHeader-action": {
      position: "absolute",
      right: "12px",
    },
  },
  cardHeader: {
    padding: "12px 16px",
    paddingBottom: "6px",
  },
  cardHeaderImg: {
    "& button": {
      width: "56px",
      height: "56px",
      backgroundColor: "#E8E8E8",
    },
  },
  cardHeaderImgActive: {
    "& button": {
      backgroundColor: "#e5f1fb",
      "& img": {
        filter:
          "invert(28%) sepia(75%) saturate(4168%) hue-rotate(191deg) brightness(97%) contrast(101%)",
      },
    },
  },
  cardMenuBtn: {
    padding: "4px",
    marginTop: "4px",
  },
  cardContentTitle: {
    fontWeight: "600",
    color: "rgba(24, 24, 24, 1)",
  },
  cardContent: {
    padding: "12px 12px 16px 12px",
  },
  cardContentSubTitle: {
    color: "#5d5d5d",
    marginTop: "3px",
  },
  cardContentFooter: {
    width: "100%",
    paddingTop: "6px",
    "& .dot": {
      marginLeft: "13px",
      marginRight: "13px",
    },
    "& .MuiSwitch-root": {
      marginLeft: "auto",
    },
  },
}));

const CardDefault = ({ title, questionsNumber, date, isActive }) => {
  const classes = useStyles();

  // Menu Button
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Toggle Form Activation
  const ToggleFormActivation = (e) => {};

  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => {
    handleMenuClose();
    swal({
      title: "Are you sure?",
      icon: "error",
      text: "You will not be able to recover this entity! ",
      buttons: ["Cancel", "Yes Delete"],
    });
  };
  const handleHideDelete = () => {
    handleMenuClose();
    setShowDelete(false);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          avatar: `${classes.cardHeaderImg} ${
            isActive ? classes.cardHeaderImgActive : ""
          }`,
        }}
        avatar={
          <IconButton>
            <img src={sheetIcon} alt="Form Avatar" />
          </IconButton>
        }
        action={
          <div className={classes.cardAction}>
            <IconButton
              aria-label="settings"
              classes={{ root: classes.cardMenuBtn }}
              onClick={handleMenuClick}
            >
              <MoreHoriz />
            </IconButton>
            <Menu
              classes={{
                list: "dropdown-menu-list",
                paper: "dropdown-menu-paper",
              }}
              id="card-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{ marginTop: "10px", marginLeft: "30px" }}
            >
              <span className="arrow-up"></span>
              <MenuItem
                classes={{ root: "dropdown-menu-item" }}
                onClick={handleMenuClose}
              >
                <img src={world} alt="Localize" />
                Localize
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                classes={{ root: "dropdown-menu-item" }}
              >
                <img src={editIcon} alt="Edit" />
                Edit
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                classes={{ root: "dropdown-menu-item" }}
                onClick={handleShowDelete}
              >
                <img src={trashIcon} alt="Delete" />
                Delete
              </MenuItem>
            </Menu>
          </div>
        }
      />
      <CardContent className={classes.cardContent}>
        <Grid container justifyContent="space-between">
          <Typography variant="h4" className={classes.cardContentTitle}>
            {title}
          </Typography>
          <Grid item>
            <Switch isChecked={isActive} handleSwitch={ToggleFormActivation} />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.cardContentFooter}
        >
          <Typography variant="h5" className={classes.cardContentSubTitle}>
            {questionsNumber} Questions
          </Typography>
          <div className="dot"></div>
          <Typography
            variant="h5"
            className={classes.cardContentSubTitle}
            style={{ marginRight: "13px" }}
          >
            {date}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardDefault;
