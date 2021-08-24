import { useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "504px",
    marginTop: "43px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#181818",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  leftBox: {
    width: "32px",
    height: "48px",
    background: "#F1F1F1",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "48px",
    color: "#181818",
    fontStyle: "normal",
    borderRadius: "6px 0 0 6px",
  },
  rightBox: {
    width: "40px",
    height: "48px",
    // background: "#0078D3",
    borderRadius: "0 6px 6px 0",
  },
  textFieldContainer: {
    borderRadius: "6px",
    border: "2px solid #ECEBEB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  textField: {
    width: "140px",
  },
}));

const ColorInput = ({ title, initialColor }) => {
  const classes = useStyle();

  const [color, setColor] = useState(initialColor);

  return (
    <div
      className={classes.container}
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <div item xs={6}>
        <Typography className={classes.title}>{title}</Typography>
      </div>
      <div item xs={6}>
        <div className={classes.textFieldContainer}>
          <div className={classes.leftBox}>#</div>
          <TextField
            value={color}
            variant="outlined"
            className={classes.textField}
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={classes.rightBox} style={{ background: color }}></div>
        </div>
      </div>
    </div>
  );
};

export default ColorInput;
