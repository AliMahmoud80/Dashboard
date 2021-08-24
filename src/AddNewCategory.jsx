import Topbar from "./components/Topbar";
import chevronLeft from "./assets/chevronLeft.svg";
import { Grid, makeStyles } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import CategoriesMenu from "./components/CategoriesMenu";
import AddHeaders from "./components/AddHeaders";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import NewCategoryForm from "./components/NewCategoryForm";
// import leftarrow from "./assets/left-arrow.png";
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
    borderRight: "1px solid #EDEBE9",
    padding: "24px 18px 24px 24px",
    maxWidth: "250px",
  },
  addHeaders: {
    alignItems: "center",
    flexWrap: "nowrap",
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
}));

function AddNewCategory() {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(true);
  const [categories, setCategories] = useState([]);

  const handleShowUpdated = () => {
    swal({
      title: "Updated successfully",
      icon: "success",
      buttons: false,
      timer: "2000",
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

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid container item xs direction="column">
        <Grid item container className={classes.topbar}>
          <Topbar
            title="All Categories"
            btnTitle="Save"
            leftIcon={chevronLeft}
            link="/categories"
            leftLink="/categories"
            btnCancel="Cancel"
            isBtn={true}
            onBtnClick={handleShowUpdated}
            onBtnCancel={handleShowWarning}
          />
        </Grid>
        <Grid item xs={10} container>
          <Grid item xs className={classes.rightSide}>
            <AddHeaders
              header="Category Details"
              subHeader="Fill the category details below"
              icon={<DescriptionOutlinedIcon />}
            />
            <NewCategoryForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddNewCategory;
