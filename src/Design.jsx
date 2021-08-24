import { useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import AddHeaders from "./components/AddHeaders";
import Uploader from "./components/Uploader";
import Card from "./components/CardComp";
import NewThemeDialog from "./components/NewThemeDialog";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CardImg from "./assets/card-1.png";
import CardImg2 from "./assets/card-2.png";
// Icons
import { PhotoOutlined } from "@material-ui/icons";
import paintIcon from "./assets/paintIcon.svg";

const useStyle = makeStyles((theme) => ({
  leftSide: {
    borderRight: "1px solid #EDEBE9",
    padding: "24px",
    maxWidth: "350px",
  },
  uploader: {
    height: "100%",
    width: "270px",
    maxHeight: "275px",
    borderRadius: "4px",
  },
  addHeaders: {
    alignItems: "center",
  },
  addImage: {
    marginLeft: "18px",
    marginTop: "25px",
    width: "245px",
    // height: "275px",
  },
  rightSide: {
    padding: "24px",
  },
}));

const Design = () => {
  const classes = useStyle();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid item xs>
        <Grid container>
          <Topbar
            title="Design"
            btnTitle="New Theme"
            subTitle="On this page, you can create your own themes and upload your business logo"
            searchBar
            guideButtons
            isBtn
            onBtnClick={() => {
              setShowDialog(true);
            }}
          />
        </Grid>
        <Grid container xs={12} style={{ height: "calc(100% - 142px)" }}>
          <Grid
            item
            xs
            direction="column"
            alignItems="center"
            className={classes.leftSide}
          >
            <AddHeaders
              header="Logo"
              subHeader="The logo will be shown on Menu Screen only"
              icon={<PhotoOutlined />}
              className={classes.addHeaders}
            />
            <Grid
              item
              container
              justifyContent="center"
              className={classes.addImage}
            >
              <Uploader rootClass={classes.uploader} previewIcon />
            </Grid>
          </Grid>
          <Grid item xs className={classes.rightSide}>
            <AddHeaders
              header="Themes"
              subHeader="You can create your own themes"
              icon={<img src={paintIcon} alt="" />}
              className={classes.addHeaders}
            />
            <Grid
              container
              xs={12}
              spacing={2}
              style={{ marginTop: "24px", flexWrap: "nowrap" }}
            >
              <Grid item>
                <Card
                  buttonText="Edit"
                  showMenu
                  cardInnerTitle="Ramadhan Theme"
                  cardInnerSubTitle="Theme"
                />
              </Grid>
              <Grid item>
                <Card
                  buttonText="Edit"
                  showMenu
                  cardInnerTitle="Healthy Theme"
                  cardInnerSubTitle="Theme"
                  img={CardImg2}
                />
              </Grid>
              <Grid item>
                <Card
                  buttonText="Edit"
                  showMenu
                  cardInnerTitle="Pastel Theme"
                  cardInnerSubTitle="Theme"
                  img={CardImg}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <NewThemeDialog
        open={showDialog}
        onClose={() => {
          setShowDialog(false);
        }}
      />
    </Grid>
  );
};

export default Design;
