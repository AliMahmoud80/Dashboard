import { useState } from "react";
// Components
import {
  Grid,
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControl,
  Switch,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import verticalDots from "../assets/more-vertical.png";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import emojiesIcon from "../assets/emojies.svg";

const useStyles = makeStyles((theme) => ({
  SingleFormItem: {
    backgroundColor: "white",
    border: "1px solid #EDEBE9",
    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.04)",
    borderRadius: "6px",
    marginBottom: "24px",
  },
  bottomSide: {
    padding: "22px 0px",
    marginTop: "16px",
    borderTop: "1px solid #EDEBE9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  bottomSideTitle: {
    marginLeft: "8px",
  },
  singleItemIcon: {
    color: "#666666",
    cursor: "pointer",
  },
  InputField: {
    "& .MuiInputBase-root": {
      height: "43px",
    },
  },
}));

const SingleFormItem = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [age, setAge] = useState(1);
  const [value, setValue] = useState(0);
  const [state, setState] = useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl fullWidth className={classes.SingleFormItem}>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        style={{ padding: "8px 0px" }}
      >
        <img src={verticalDots} width="min-content" />
      </Box>
      <Box
        display="flex"
        style={{
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >
          <Grid item xs>
            <TextField
              id="outlined-full-width"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              fullWidth
              classes={{ root: classes.InputField }}
            />
          </Grid>
          <Grid item style={{ minWidth: "250px" }}>
            <Select
              fullWidth
              id="status"
              variant="outlined"
              value={age}
              onChange={handleChange}
              MenuProps={{
                classes: { root: classes.InputField },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
                getContentAnchorEl: null,
              }}
              style={{ height: "43px" }}
            >
              <MenuItem value={1}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  Rating
                  <Rating name="pristine" value={0} disabled />
                </Box>
              </MenuItem>
              <MenuItem value={2}>Yes / No</MenuItem>
              <MenuItem value={3}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  Smiley
                  <img src={emojiesIcon} alt="Emojies" />
                </Box>
              </MenuItem>
              <MenuItem value={4}>Text</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid className={classes.bottomSide}>
          <Box display="flex">
            {/* <SwitchAnt handleSwitch={(e) => {}} /> */}
            <Switch />
            <Typography variant="h3" className={classes.bottomSideTitle}>
              Required
            </Typography>
          </Box>
          <Box display="flex">
            <FileCopyIcon
              style={{ marginRight: "24px" }}
              className={classes.singleItemIcon}
            />
            <DeleteIcon className={classes.singleItemIcon} />
          </Box>
        </Grid>
      </Box>
    </FormControl>
  );
};

export default SingleFormItem;
