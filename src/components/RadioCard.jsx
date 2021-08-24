import { Grid, makeStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Checkbox,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import RadioIcon from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles({
  checkIcon: {
    backgroundColor: "#0078D3",
    color: "white",
    borderRadius: "50%",
  },
  radioButton: {
    color: "black",
    padding: "0",
    marginRight: "16px",
    "& svg": {
      width: "24px",
      height: "24px",
    },
  },
  radioCard: {
    border: "1px solid",
    borderColor: " #EDEBE9",
    borderRadius: "8px",
    padding: "24px",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "32px",
  },
  radioCardHeader: {
    fontWeight: "bold",
    color: "#181818",
  },
  radioCardSubHeader: {
    color: "#5D5D5D",
    marginTop: "12px",
  },
  active: {
    backgroundColor: "rgba(0, 120, 211, 0.05)",
    borderColor: "#0078D3",
  },
  formControl: {
    minWidth: "auto",
  },
});

function RadioCard({ header, subHeader, solution, value, handleChange, name }) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      className={[
        classes.radioCard,
        solution.indexOf(value) !== -1 && classes.active,
      ].join(" ")}
      component="label"
      htmlFor={value}
    >
      <FormControl classes={{ root: classes.formControl }}>
        <FormGroup>
          <Checkbox
            checked={solution.indexOf(value) !== -1}
            value={value}
            color="primary"
            name={name}
            icon={<RadioIcon />}
            checkedIcon={<CheckIcon className={classes.checkIcon} />}
            inputProps={{ "aria-label": value, id: value }}
            className={classes.radioButton}
            onChange={handleChange}
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Box>
        <Typography variant="h2" className={classes.radioCardHeader}>
          {header}
        </Typography>
        <Typography variant="h4" className={classes.radioCardSubHeader}>
          {subHeader}
        </Typography>
      </Box>
    </Grid>
  );
}

export default RadioCard;
