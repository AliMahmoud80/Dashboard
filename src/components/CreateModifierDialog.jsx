import { useState } from "react";
import {
  Grid,
  Switch,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  IconButton,
} from "@material-ui/core";
import { DeleteOutline, AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    "& input": {
      height: "40px",
      boxSizing: "border-box",
      width: "calc(100% - 49px)",
    },
    "& .input-adornment": {
      backgroundColor: "#f1f1f1",
      height: "100%",
      position: "absolute",
      right: "0",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      width: "54px",
      justifyContent: "center",
      fontSize: "14px",
    },
  },
  dialogContent: {
    padding: "0 !important",
    overflow: "hidden",
    minWidth: "860px",
  },
  actionsBox: {
    "& button": {
      fontSize: "14px",
      fontWeight: "500",
      marginRight: "16px",

      "&:last-of-type": {
        marginRight: "0",
      },
    },
  },
  sectionContainer: {
    padding: "24px 40px",
    border: "1px solid #e7e7e6",
    borderWidth: "1px 0 1px 0",
    marginTop: "24px",
    marginBottom: "1px",
  },
  deleteBtn: {
    color: "#FD3A57",
    background: "rgb(253, 58, 87, .1)",
    borderRadius: "4px",
    width: "40px",
    height: "40px",
  },
  dialogActions: {
    justifyContent: "flex-start",
    padding: "32px 40px",
  },
}));
const CreateModifierDialog = ({ open, onClose }) => {
  const classes = useStyles();

  // New Modifier Row
  const modifierRow = (i) => {
    return (
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        direction="row"
        item
        xs={12}
      >
        <Grid item xs={2}>
          <FormControlLabel control={<Switch />} label="Active" />
        </Grid>
        <Grid item xs={7}>
          <TextField
            classes={{ root: classes.inputContainer }}
            fullWidth
            placeholder="Modifier Name (e.g. “Cheese”, “Level 1”)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            type="number"
            placeholder="0.00"
            classes={{ root: classes.inputContainer }}
            InputProps={{
              endAdornment: <div className="input-adornment">USD</div>,
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            classes={{ root: classes.deleteBtn }}
            aria-label="Delete"
            onClick={() => {
              removeModifier(i);
            }}
          >
            <DeleteOutline />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  const [rowsCounter, setRowsCounter] = useState(1);
  const [modifierRows, setModifierRows] = useState([modifierRow(0)]);

  const increaseModifiers = () => {
    // setModifierRows(rows => {
    //   // console.log(modifierRows)
    //   // return [...rows, modifierRow(rowsCounter)]
    //   rows.push(modifierRow(rowsCounter))
    //   return [...rows]
    // })
    setRowsCounter((prev) => prev + 1);
    console.log(modifierRows, rowsCounter);
  };

  const removeModifier = (i) => {};

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={"md"}>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Grid container>
          <Grid
            container
            display="flex"
            alignItems="center"
            style={{ padding: "40px 40px 24px" }}
            direction="row"
          >
            <Grid item xs={12} lg={3} style={{ color: "#5d5d5d" }}>
              Modifier Group Name
            </Grid>
            <Grid item xs={12} lg={9}>
              <TextField
                fullWidth
                variant="outlined"
                classes={{ root: classes.inputContainer }}
                placeholder="Modifier Name (e.g. “Toppings”, “Sauce”)"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            classes={{ root: classes.sectionContainer }}
          >
            {modifierRows.map((row) => {
              return row;
            })}
            <Grid item xs={12}>
              <Button
                startIcon={<AddCircle />}
                color="primary"
                onClick={increaseModifiers}
              >
                Add More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button style={{ fontWeight: "400" }} onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModifierDialog;
