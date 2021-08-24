import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import SwitchAnt from "./swtichAnt";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "475px",
    marginBottom: "40px",
  },
  icon: {
    display: "block",
    marginRight: "9px",
  },
  name: {
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
    textTransform: "capitalize",
  },
  titleContainer: {
    marginTop: "12px",
    marginBottom: "8px",
  },
  title: {
    color: "#181818",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "17px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  caption: {
    marginLeft: "8px",
  },
}));

const CardTablet = ({ children, name, title, subTitle, marginBottom }) => {
  const classes = useStyle();

  const [checked, setChecked] = useState(true);

  const toggleSwitchHandler = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Grid
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.card}
      style={{ marginBottom }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <span className={classes.icon}>{children}</span>
        <Typography className={classes.name}>{name}</Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className={classes.titleContainer}
      >
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <SwitchAnt
                isChecked={checked}
                handleSwitch={toggleSwitchHandler}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.caption}>
                {checked ? "Yes" : "No"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" className={classes.subTitle}>
        {subTitle
          ? subTitle
          : "Additional info for this setting can be placed here"}
      </Typography>
    </Grid>
  );
};

export default CardTablet;
