import { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import DeletePopUp from "./DeletePopUp";
// Icons
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CardDefaultImg from "../assets/card-default-img.png";
import doubleSheetIcon from "../assets/doubleSheetIcon.svg";
import trashIcon from "../assets/trashIcon.svg";
import world from "../assets/world.png";
import move from "../assets/move.svg";
import swal from "sweetalert";

const useStyles = makeStyles(({ props }) => ({
  cardContainer: {
    minWidth: "246px",
  },
  innerCard: {
    boxShadow: " 0px 4px 16px 0px rgba(238, 238, 238, 1)",
    // marginRight: "24px",
    position: "relative",
    // width: '100%'
  },
  cardMenu: {
    position: "absolute",
    right: "11px",
    top: "14px",
    backgroundColor: "white",
    padding: "0px",
    borderRadius: "8px",
    height: "32px",
    minWidth: "32px",
    zIndex: "9999",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  MenuContainer: {
    top: "289px",
    left: "398px",
    "&::before": {
      content: '"',
      borderWidth: "10px",
      borderStyle: "solid",
      borderColor: "red",
    },
  },
  cardContentTitle: {
    fontWeight: "600",
    color: "rgba(24, 24, 24, 1)",
  },
  cardContent: {
    padding: "12px 12px 16px 12px",
  },
  cardContentSubTitle: {
    color: "#181818",
    marginTop: "3px",
  },
  buttonContainer: {
    position: "absolute",
    top: "44px",
    left: "64px",
  },
  cardHeader: {
    backgroundImage: (props) => `url(${props.img || CardDefaultImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "160px",
    padding: "0px",
    transition: "all 0.5s ease",
    "&:hover": {
      boxShadow: "inset 0 0 0 1000px rgb(0 0 0 / 49%)",
      transition: "all 0.5s ease-out",
    },
  },
  buttonContainerOne: {
    position: "absolute",
    top: "70px",
    left: "64px",
  },
  firstButton: {
    minWidth: "100px",
    backgroundColor: "#0078D3",
    borderRadius: "8px",
    padding: "8px 20px",

    fontWeight: "700",
    color: "white",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#1188e2",
    },
  },
  secondButton: {
    minWidth: "100px",
    backgroundColor: "#06C86B",
    borderRadius: "8px",
    padding: "8px 20px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "white",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#20e084",
    },
  },
  secondButtonHidden: {
    display: "none",
  },
  itemType: {
    position: "absolute",
    top: "8px",
    left: "8px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "40px",
  },
}));

const CardComp = ({
  cardInnerTitle,
  cardInnerSubTitle,
  buttonText,
  buttonText2,
  img,
  showMenu,
  itemType,
  isLocalize,
  isMove,
  onMove,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const cardHeader = useRef();
  const classes = useStyles({ img });
  const [state, setState] = useState({
    checkedC: true,
  });

  const handleClick = (event) => {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
      event.target.closest(".cardMenuOnHover").style.visibility = "visible";
    } else {
      setAnchorEl(null);
    }
  };
  const handleMenuClose = () => {
    const btns = document.querySelectorAll(".cardMenuOnHover");
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.visibility = "hidden";
    }
    setAnchorEl(null);
  };
  const handleMoveEvent = () => {
    onMove();
    handleMenuClose();
  };

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
    <Grid item xs style={{ minWidth: "215px", maxWidth: "262px" }}>
      <Card className={classes.innerCard}>
        <CardHeader
          className={`${classes.cardHeader} cardHeaderShowDiv`}
          ref={cardHeader}
          onMouseEnter={() => {
            cardHeader.current.classList.add("overlay");
          }}
          onMouseLeave={() => {
            cardHeader.current.classList.remove("overlay");
            const btns = document.querySelectorAll(".cardMenuOnHover");
            for (var i = 0; i < btns.length; i++) {
              btns[i].style.visibility = "hidden";
            }
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          className={`${
            buttonText2 ? classes.buttonContainer : classes.buttonContainerOne
          } buttonsShow`}
          onMouseEnter={() => {
            cardHeader.current.classList.add("overlay");
          }}
          onMouseLeave={() => {
            cardHeader.current.classList.remove("overlay");
          }}
        >
          {buttonText2 && (
            <Button variant="contained" className={classes.secondButton}>
              {buttonText2}
            </Button>
          )}
          <Button variant="contained" className={classes.firstButton}>
            {buttonText}
          </Button>
        </Box>
        {showMenu ? (
          <div className="cardMenuOnHover">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={`${classes.cardMenu} `}
              onMouseEnter={(e) => {
                cardHeader.current.classList.add("overlay");
                e.target.closest(".cardMenuOnHover").style.visibility =
                  "visible";
              }}
            >
              <MoreHorizIcon color="disabled" />
            </Button>
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
              style={{ marginTop: "20px", marginLeft: "32px" }}
              onMouseEnter={() => {
                cardHeader.current.classList.add("overlay");
              }}
              onMouseLeave={() => {
                cardHeader.current.classList.remove("overlay");
              }}
            >
              <span className="arrow-up"></span>
              {isMove && (
                <MenuItem
                  classes={{ root: "dropdown-menu-item" }}
                  onClick={handleMoveEvent}
                >
                  <img src={move} alt="Move" />
                  Move
                </MenuItem>
              )}
              {isLocalize && (
                <MenuItem
                  onClick={handleMenuClose}
                  classes={{ root: "dropdown-menu-item" }}
                >
                  <img src={world} alt="World" />
                  Localize
                </MenuItem>
              )}

              <MenuItem
                onClick={handleMenuClose}
                classes={{ root: "dropdown-menu-item" }}
              >
                <img src={doubleSheetIcon} alt="Duplicate" />
                Duplicate
              </MenuItem>
              <MenuItem
                onClick={handleShowDelete}
                classes={{ root: "dropdown-menu-item" }}
              >
                <img src={trashIcon} alt="Delete" />
                Delete
              </MenuItem>
            </Menu>
          </div>
        ) : (
          ""
        )}

        {itemType && (
          <Paper className={classes.itemType}>
            <img
              src={itemType}
              style={{ width: "max-content", height: "fit-content" }}
              alt=""
            />
          </Paper>
        )}

        <CardContent className={classes.cardContent}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" className={classes.cardContentTitle}>
              {cardInnerTitle}
            </Typography>
            <Typography component="div">
              <Grid component="label" container alignItems="center">
                <Grid item>
                  <Switch />
                </Grid>
              </Grid>
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.cardContentSubTitle}>
            {cardInnerSubTitle}
          </Typography>
        </CardContent>
      </Card>
      <DeletePopUp open={showDelete} onClose={handleHideDelete} />
    </Grid>
  );
};

export default CardComp;
