import { useState, memo } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DateRangePicker from "./DateRangePicker";
// Icons
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles((theme) => ({
  Dialog: {
    position: "relative",
    width: "100%",
  },
  DialogHeader: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  dialogContent: {
    padding: "24px 32px !important",
    [theme.breakpoints.down("md")]: {
      padding: "16px !important",
    },
  },
  DialogPaper: {
    maxWidth: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "65%",
    },
  },
  closeButton: {
    position: "absolute",
    top: "2px",
    right: "0px",

    [theme.breakpoints.down("md")]: {
      right: "2px",
    },
  },
}));

const SurvetFiltersDialog = ({ onClose }) => {
  const classes = useStyle();

  const [status, setStatus] = useState("all");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Dialog
      fullWidth
      classes={{ root: classes.Dialog, paper: classes.DialogPaper }}
      open={true}
    >
      <DialogContent classes={{ root: classes.dialogContent }}>
        {/* Close Button */}
        <IconButton onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          width={1}
          className={classes.DialogHeader}
        >
          <Box style={{ marginBottom: "16px" }} width={1}>
            <Typography variant="h1" style={{ marginBottom: "8px" }}>
              <bold>Filters</bold>
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <FormControl component="fieldset">
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="status"
              value={status}
              onChange={handleStatusChange}
              row
            >
              <FormControlLabel
                value="all"
                control={<Radio color="primary" />}
                label="All Status"
              />
              <FormControlLabel
                value="open"
                control={<Radio color="primary" />}
                label="Open Only"
              />
              <FormControlLabel
                value="close"
                control={<Radio color="primary" />}
                label="Close Only"
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            style={{ height: "52px", marginTop: "16px", marginBottom: "24px" }}
          >
            <FormLabel component="legend" style={{ marginBottom: "4px" }}>
              Date
            </FormLabel>
            <DateRangePicker style={{ height: "32px" }} />
          </FormControl>
          <Box
            display="flex"
            flexDirection="column"
            style={{ marginBottom: "30px" }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginBottom: "8px" }}
            >
              Apply Filter
            </Button>
            <Button fullWidth variant="contained">
              Reset Filter
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default memo(SurvetFiltersDialog);
