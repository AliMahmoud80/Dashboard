import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import uploadCloud from "../../assets/uploadCloud.png";
import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	displayNone: {
		display: "none",
	},
}));

const UploadImage = withStyles(theme => ({
	root: {
		borderColor: "#0078D3",
		border: "1px dashed",
		color: "#0078D3",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "unset",
		width: "200px",
		height: "200px",
		marginLeft: "20px",
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
		},
	},
	text: {
		marginTop: "16px",
		marginBottom: "0",
	},
}))(DropzoneArea);

function Uploader() {
	const classes = useStyles();
	const [inPreview, setInPreview] = useState(false);
	return (
		<UploadImage
			acceptedFiles={[".jpg, .png,"]}
			filesLimit={1}
			dropzoneText={`Drop jpg or png files here`}
			showPreviewsInDropzone
			classes={{
				textContainer: inPreview ? classes.displayNone : null,
			}}
			onDrop={() => {
				setInPreview(true);
			}}
			onDelete={() => {
				setInPreview(false);
			}}
			onChange={files => {
				console.log("Files:", files);
			}}
			showAlerts={false}
			previewGridClasses={{
				item: classes.preview,
			}}
			getPreviewIcon={file => {
				if (file.file.type.split("/")[0] === "image")
					return <img className={classes.previewImg} alt="" src={file.data} />;
			}}
		/>
	);
}

export default Uploader;
