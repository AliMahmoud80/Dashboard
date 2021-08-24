import { useState, useEffect, memo } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Rating } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import emoji from "../assets/Emoji.png";
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
    minWidth: "923px",
    overflow: "auto",
    position: "relative",
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
  resultList: {
    border: "1px solid #EDEBE9",
    borderRadius: "6px",
    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.04)",
  },
  resultBox: {
    borderBottom: "1px solid #edebe9",
    padding: "16px 24px",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      padding: "12px",
    },
  },
}));

const SurveyResultDialog = ({ data, onClose }) => {
  const classes = useStyle();
  const [surveyResult, setSurveyResult] = useState(data);

  // Fetch Survey Results
  useEffect(() => {
    const results = {
      username: "Hassan Khalid",
      email: "hasankhdik@hotmail.com",
      results: [
        {
          title: "How would you rate our restaurant?",
          type: "rate",
          value: 5,
        },
        {
          title: "How are you feeling?",
          type: "emoji",
          value: `${emoji}`,
        },
        {
          title: "Will you recommend our restaurant to your friends?",
          type: "yes/no",
          value: "Yes",
        },
        {
          title: "Have any feedbacks?",
          type: "text",
          value: "I really like every menu, but the sauce is too spicy",
        },
      ],
    };
    setSurveyResult((o) => {
      return { ...o, ...results };
    });
  }, [data]);

  return (
    <Dialog
      fullWidth
      classes={{ root: classes.Dialog, paper: classes.DialogPaper }}
      open={true}
      onClose={onClose}
    >
      <DialogContent classes={{ root: classes.dialogContent }}>
        {/* Close Button */}
        <IconButton onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        {/* Dialog Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          width={1}
          className={classes.DialogHeader}
        >
          <Box style={{ marginBottom: "24px" }} width={1}>
            <Typography variant="h1" style={{ marginBottom: "8px" }}>
              <bold>{surveyResult.formName}</bold>
              <span style={{ fontWeight: "normal" }}>
                <span>&nbsp;-&nbsp;</span>
                Feedback {surveyResult.id}
              </span>
            </Typography>

            <Typography display="block">{surveyResult.date}</Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              style={{ lineHeight: "18px", marginRight: "40px" }}
              className={`status-tag ${
                surveyResult.status ? "status-tag-open" : "status-tag-closed"
              }`}
            >
              {surveyResult.status ? "Opened" : "Closed"}
            </Typography>
          </Box>
        </Box>
        {/* Result List */}
        <Box
          display="flex"
          flexDirection="column"
          className={classes.resultList}
          style={{ marginBottom: "24px" }}
        >
          {surveyResult.results &&
            surveyResult.results.map((r, i) => (
              <Box key={i} display="flex" className={classes.resultBox}>
                <Box style={{ width: "70%" }}>{r.title}</Box>
                <Box style={{ width: "30%" }}>
                  {/* Rating */}
                  {r.type === "rate" && (
                    <Rating name="read-only" value={r.value} readOnly />
                  )}
                  {/* Emoji */}
                  {r.type === "emoji" && <img src={r.value} alt="" />}
                  {/* Text */}
                  {r.type === "text" && r.value}
                  {/* Yes/No */}
                  {r.type === "yes/no" && r.value}
                </Box>
              </Box>
            ))}
        </Box>
        {/* Feedback Owner */}
        <Box display="flex" flexDirection="column">
          <Typography>
            Feedback by
            <span className="text-bolder">
              {" "}
              {surveyResult.username && surveyResult.username}
            </span>
          </Typography>
          <Typography
            className="text-light text-sm"
            styles={{ marginTop: "4px" }}
          >
            {surveyResult.email && surveyResult.email}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default memo(SurveyResultDialog);
