import Topbar from "./components/Topbar";
import chevronLeft from "./assets/chevronLeft.svg";
import { Grid, makeStyles, Radio, FormControlLabel } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import AddHeaders from "./components/AddHeaders";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import Uploader from "./components/Uploader";
import NewBannerForm from "./components/NewBannerForm";
import swal from "sweetalert";

// Ok
// Deploy
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
  },
  categoryContainer: {
    height: "100vh",
  },
  cardTitle: {
    color: "#000000",
    fontWeight: "700",
  },
  cardSubTitle: {
    color: "#5D5D5D",
    marginTop: "7px",
    marginBottom: "25px",
  },

  leftSide: {
    borderRight: "1px solid #EDEBE9",
    padding: "24px",
    maxWidth: "450px",
  },
  addHeaders: {
    alignItems: "center",
    flexWrap: "nowrap",
  },
  addImage: {
    marginTop: "16px",
    // width: "200px",
    height: "200px",
  },
  rightSide: {
    padding: "24px",
  },
  formLabel: {
    ...theme.typography.formLabel,
    fontSize: "16px",
  },
  formInputContainer: {
    marginTop: "24px",
    marginBottom: "18px",
  },
  formInput: {
    width: "100%",
    "& input": {
      padding: "10.5px 12px",
    },
  },
  formInputMultiline: {
    width: "100%",
    "& input": {
      padding: "8px 12px",
    },
  },
  publicStatus: {
    alignSelf: "flex-start",
  },
  helpIcon: {
    width: "16px",
    height: "16px",
    color: "#666666",
    marginLeft: "4px",
  },
  switchContainer: {
    display: "flex",
    marginBottom: "16px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
  displayNone: {
    display: "none",
  },
  radio: {
    padding: "0",
  },
}));

function AddNewBanner() {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(true);
  const [categories, setCategories] = useState([]);

  const handleShowUpdated = () => {
    swal({
      title: "Updated successfully",
      icon: "success",
      buttons: false,
    });
  };
  const handleShowWarning = () => {
    swal({
      title: "Warning!",
      icon: "warning",
      text: "You have unsaved changes. Are you sure you want to navigate away?",
      buttons: ["Cancel", "OK Navigate"],
    });
  };

  // Fetch Categories.
  useEffect(() => {
    // Call API...

    // Set dummy data
    setCategories([
      {
        id: 1,
        name: "Main Courses",
        items: [],
      },
      {
        id: 2,
        name: "Desserts",
        items: [],
      },
      {
        id: 3,
        name: "Drinks",
        items: [],
      },
    ]);
  }, []);

  // Show/Hide categories menu.
  const toggleMenu = () => {
    setShowMenu((m) => !m);
  };

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid container item xs direction="column">
        <Grid item container className={classes.topbar}>
          <Topbar
            title="Add New Banner"
            btnTitle="Save"
            leftIcon={chevronLeft}
            // onBurgerClick={toggleMenu}
            link="/banner"
            leftLink="/banner"
            btnCancel="Cancel"
            isBtn={true}
            onBtnClick={handleShowUpdated}
            onBtnCancel={handleShowWarning}
          />
        </Grid>
        <Grid item xs container>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            xs
            className={classes.leftSide}
          >
            <AddHeaders
              header="Banner"
              subHeader="Choose the content of the banner"
              icon={<PhotoOutlinedIcon />}
              className={classes.addHeaders}
            />
            <Grid item style={{ alignSelf: "start", marginTop: "15px" }}>
              <FormControlLabel
                value="img"
                control={
                  <Radio
                    color="primary"
                    checked={true}
                    classes={{ root: classes.radio }}
                  />
                }
                label="Image"
              />
            </Grid>
            <Grid
              container
              justifyContent="center"
              className={classes.addImage}
            >
              <Uploader />
            </Grid>
          </Grid>
          <Grid item xs className={classes.rightSide}>
            <AddHeaders
              header="Banner Details"
              subHeader="Fill the banner details below"
              icon={<DescriptionOutlinedIcon />}
            />
            <NewBannerForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddNewBanner;
