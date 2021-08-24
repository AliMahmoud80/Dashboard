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
import useScript from "../hooks/useScript";
import Player from "../libs/Player";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  displayNone: {
    display: "none",
  },
  btnGroup: {
    marginTop: "9px",
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
}));

const UploadImage = withStyles((theme) => ({
  root: {
    borderColor: "#8C8C8C",
    border: "1px dashed",
    color: "#8C8C8C",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px",
    borderRadius: "15px",
    "& .MuiDropzonePreviewList-root": {
      width: "100%",
      height: "100%",
      margin: "auto",
    },
    "& .MuiDropzonePreviewList-root video": {
      width: "100%",
      height: "100%",
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

function PlayNewVideo(v) {
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("play", v);
  }
}

function VideoUploader() {
  const classes = useStyles();
  const [inPreview, setInPreview] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);

  useScript(process.env.PUBLIC_URL + "./playerjs.js");

  const addFile = (newFileObjs) => {
    setFileObjects(newFileObjs);
  };
  const removeFiles = () => {
    setInPreview(false);
    setFileObjects([]);
    window.pljssglobal[0].api("play", "/");
  };
  const triggerUploader = () => {
    document.querySelector(".video-dropzone input").click();
  };

  return (
    <Grid item xs classes={{ root: classes.root }}>
      <div
        style={{
          width: "100%",
          display: fileObjects.length > 0 ? "none" : "flex",
        }}
      >
        <UploadImage
          dropzoneClass="video-dropzone"
          fileObjects={fileObjects}
          acceptedFiles={["video/*"]}
          filesLimit={1}
          maxFileSize={500000000000000}
          dropzoneText={`Drop video files here`}
          showPreviewsInDropzone
          classes={{
            textContainer: inPreview ? classes.displayNone : null,
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
            PlayNewVideo(file.data);
          }}
        />
      </div>
      <div
        id="preview-player"
        className={fileObjects.length === 0 ? classes.displayNone : ""}
      >
        video placeholder
      </div>
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

export default VideoUploader;
