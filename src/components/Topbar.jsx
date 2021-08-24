import {
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
// Icons
import VideoIcon from "../assets/videoIcon.svg";
import guideIcon from "../assets/guideIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import addIcon from "../assets/addIcon.svg";

const useStyles = makeStyles((theme) => ({
  topbarContainer: {
    padding: "24px",
    borderBottom: "1px solid #EDEBE9",
    backgroundColor: "#fff",
  },
  topBarContainerNoSub: {
    paddingBottom: "16px",
  },
  titleBox: {
    display: "flex",
    alignItems: "center",
    gap: "16px",

    "& button": {
      padding: 0,
    },
  },
  subTitle: {
    color: "#5D5D5D",
    marginTop: "8px",
  },
  guideButtons: {
    marginTop: "16px",
    display: "flex",

    "& button:first-child": {
      marginRight: "36px",
    },
    "& button": {
      padding: 0,
      fontSize: "14px",
      fontWeight: "bold",

      "& span img": {
        marginRight: "9px",
      },
    },
  },
  searchInput: {
    maxWidth: "180px",
    height: "40px",
  },
  linkButtonContainer: {
    textDecoration: "none",
  },
  linkButtonContainerCancel: {
    textDecoration: "none",
    color: "#5D5D5D",
  },
  cancel: {
    border: "1px solid #F3F2F1",
    marginRight: "23px",
    color: "#5D5D5D",
  },
  btn: {
    minWidth: "34px",
    height: "40px",
    padding: "8px 21px",
  },
}));

const Topbar = ({
  leftIcon,
  leftLink,
  onBurgerClick,
  title,
  searchBar,
  subTitle,
  searchValue,
  onSearch,
  isBtn,
  btnTitle,
  onBtnClick,
  onClickLeft,
  link,
  icon,
  guideButtons,
  btnCancel,
  onBtnCancel,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="start"
      className={clsx(classes.topbarContainer, {
        [classes.topBarContainerNoSub]: !subTitle,
      })}
    >
      <Box
        style={{ display: "flex", flexDirection: "column" }}
        className={classes.leftContainer}
      >
        <Box className={classes.titleBox}>
          {/* Left Button */}
          {leftIcon && (
            <Link to={leftLink}>
              <IconButton aria-label="burger" onClick={onBurgerClick}>
                {icon}
                <img src={leftIcon} alt="Menu" />
              </IconButton>
            </Link>
          )}
          {icon && (
            <IconButton
              aria-label="burger"
              onClick={onClickLeft}
              style={{ marginRight: "0" }}
            >
              {icon}
            </IconButton>
          )}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Title */}
            <Typography variant="h1">{title}</Typography>
          </Box>
        </Box>
        {/* Subtitle */}
        {subTitle && (
          <Typography variant="h4" className={classes.subTitle}>
            {subTitle}
          </Typography>
        )}
        {/* Guide Buttons */}
        {guideButtons && (
          <Box className={classes.guideButtons}>
            <Button color="primary">
              <img src={VideoIcon} alt="Watch A Video" />
              Watch a Video
            </Button>
            <Button color="primary">
              <img src={guideIcon} alt="Watch A Video" />
              How to Get Started
            </Button>
          </Box>
        )}
      </Box>
      <Box style={{ display: "flex" }}>
        {searchBar && (
          <Grid item>
            {/* Search input */}
            <form onSubmit={(e) => onSearch(e)}>
              <TextField
                style={{ marginRight: "16px" }}
                id="search"
                type="search"
                placeholder="Search"
                variant="filled"
                className={classes.searchInput}
                value={searchValue}
              />
            </form>
          </Grid>
        )}
        <Grid item>
          {/* Link */}
          {btnCancel && !onBtnCancel && (
            <Link to={`${link}`} className={classes.linkButtonContainerCancel}>
              <Button
                variant="outlined"
                className={`${classes.btn} ${classes.cancel}`}
                style={{ fontWeight: "normal" }}
              >
                {btnCancel}
              </Button>
            </Link>
          )}
          {btnCancel && onBtnCancel && (
            <Button
              variant="outlined"
              className={`${classes.btn} ${classes.cancel}`}
              style={{ fontWeight: "normal" }}
              onClick={onBtnCancel}
            >
              {btnCancel}
            </Button>
          )}
          {btnTitle && !isBtn && (
            <Link to={`${link}`} className={classes.linkButtonContainer}>
              <Button
                color="primary"
                variant="contained"
                className={classes.btn}
                onClick={onBtnClick}
              >
                {btnTitle}
              </Button>
            </Link>
          )}
          {/* Button */}
          {btnTitle && isBtn && (
            <Button
              color="primary"
              variant="contained"
              className={classes.btn}
              onClick={onBtnClick}
            >
              {btnTitle}
            </Button>
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Topbar;
