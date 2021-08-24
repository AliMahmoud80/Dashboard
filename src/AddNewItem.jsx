import Topbar from "./components/Topbar";
import chevronLeft from "./assets/chevronLeft.svg";
import { Grid, makeStyles } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import CategoriesMenu from "./components/CategoriesMenu";
import AddHeaders from "./components/AddHeaders";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import NewItemForm from "./components/NewItemForm";
// import leftarrow from "./assets/left-arrow.png";
import WarningPopUp from "./components/WarningPopUp";
import swal from "sweetalert";

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
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    maxWidth: "250px",
    flexWrap: "nowrap",
    height: "fit-content",
    flex: "0",
  },
  addHeaders: {
    alignItems: "center",
  },
  rightSide: {
    padding: "24px",
    // borderLeft: "1px solid #EDEBE9",
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
}));

function AddNewItem() {
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

  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    swal({
      title: "Warning!",
      icon: "warning",
      text: "You have unsaved changes. Are you sure you want to navigate away?",
      buttons: ["Cancel", "OK Navigate"],
    });
  };
  const handleHideWarning = () => {
    setShowWarning(false);
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

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid item xs>
        <Grid container className={classes.topbar}>
          <Topbar
            title="Add New Item"
            btnTitle="Save"
            btnCancel="Cancel"
            link="/items"
            leftIcon={chevronLeft}
            leftLink="/items"
            isBtn={true}
            onBtnClick={handleShowUpdated}
            onBtnCancel={handleShowWarning}
          />
        </Grid>
        <Grid container style={{ height: "calc(100% - 81px)" }}>
          <Grid item xs={10} className={classes.rightSide}>
            <AddHeaders
              header="Item Details"
              subHeader="Fill the item details below"
              icon={<DescriptionOutlinedIcon />}
            />
            <NewItemForm />
          </Grid>
        </Grid>
      </Grid>
      <WarningPopUp open={showWarning} onClose={handleHideWarning} />
    </Grid>
  );
}

export default AddNewItem;
