import { useState } from "react";
import { Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    overflow: "initial",
    marginRight: "1px",
  },
  switchBase: {
    top: "-1px",
    left: "-2px",
    right: "11px",
    padding: 3,
    "&$checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: "0px solid transparent",
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#E8E8E8",
  },
  checked: {},
}))(Switch);

const SwitchAnt = ({ isChecked, handleSwitch }) => {
  const [checked, setChecked] = useState(isChecked);
  const handleChange = (e) => {
    setChecked(!checked);
    handleSwitch(e);
  };

  return <AntSwitch checked={checked} onChange={(e) => handleChange(e)} />;
};

export default SwitchAnt;
