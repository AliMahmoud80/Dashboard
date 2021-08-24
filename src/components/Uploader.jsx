import {
  makeStyles,
  withStyles,
  Grid,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { DropzoneAreaBase } from "material-ui-dropzone";
import uploadCloud from "../assets/uploadCloud.png";
import React, { useState } from "react";
import CloudUploadIcon from "../assets/cloudUpload.svg";
import { DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  displayNone: {
    display: "none",
  },
  btnGroup: {
    marginTop: "28px",
    "& button:first-of-type": {
      borderRadius: "72px 0 0 72px",
    },
    "& button:last-of-type": {
      borderRadius: "0 72px 72px 0",
    },
    "& button": {
      fontSize: "12px",
      fontWeight: "500",
      borderColor: "#EDEBE9",
      color: "#666666",
    },
  },
  previewIcon: {
    width: "34% !important",
    height: "auto !important",
  },
}));

const UploadImage = withStyles((theme) => ({
  root: {
    borderColor: "#8C8C8C",
    border: "1px dashed",
    color: "#8C8C8C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px",
    borderRadius: "15px",
    "& .MuiDropzonePreviewList-root": {
      width: "100%",
      height: "auto",
      margin: "auto",
    },
    "& .MuiDropzonePreviewList-removeButton": {
      display: "none",
    },
  },
  icon: {
    display: "none",
  },
  textContainer: {
    width: "90px",
    "&::before": {
      content: `url(${uploadCloud})`,
      width: "40px",
      height: "40px",
      filter:
        "invert(58%) sepia(1%) saturate(0%) hue-rotate(153deg) brightness(96%) contrast(91%)",
    },
  },
  text: {
    marginTop: "16px",
    marginBottom: "0",
  },
}))(DropzoneAreaBase);

function Uploader({ previewIcon, rootClass }) {
  const classes = useStyles();
  const [inPreview, setInPreview] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);

  const addFile = (newFileObjs) => {
    setFileObjects(newFileObjs);
  };
  const removeFiles = () => {
    setInPreview(false);
    setFileObjects([]);
  };
  const triggerUploader = () => {
    document.querySelector(".img-dropzone input").click();
  };

  return (
    <Grid item xs classes={{ root: classes.root }}>
      <UploadImage
        fileObjects={fileObjects}
        dropzoneClass="img-dropzone"
        acceptedFiles={[".jpg, .png,"]}
        filesLimit={1}
        dropzoneText={`Drop jpg or png files here`}
        showPreviewsInDropzone
        classes={{
          textContainer: inPreview ? classes.displayNone : null,
          root: rootClass ? rootClass : "",
        }}
        onAdd={addFile}
        onDrop={() => {
          setInPreview(true);
        }}
        onDelete={removeFiles}
        showAlerts={false}
        previewGridClasses={{
          item: classes.preview,
        }}
        getPreviewIcon={(file) => {
          return (
            <img
              className={classes.previewImg}
              alt=""
              src={file.data}
              className={previewIcon ? classes.previewIcon : ""}
            />
          );
        }}
      />
      {fileObjects.length > 0 && (
        <ButtonGroup classes={{ root: classes.btnGroup }} color="primary">
          <Button
            style={{ color: "#0078D3" }}
            startIcon={<img src={CloudUploadIcon} />}
            onClick={triggerUploader}
          >
            Change
          </Button>
          <Button onClick={removeFiles} startIcon={<DeleteOutline />}>
            Remove
          </Button>
        </ButtonGroup>
      )}
    </Grid>
  );
}

export default Uploader;
