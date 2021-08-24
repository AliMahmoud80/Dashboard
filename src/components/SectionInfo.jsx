import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
	sectionTitle: {
		display: "flex",
		alignItems: "center",
		fontWeight: "500",
		fontSize: "18px",
		color: "#181818",
		"& img": {
			marginRight: "8px",
		},
	},
	subTitle: {
		fontSize: "14px",
		color: "#5c5d5c",
		// marginTop: "8px",
	},
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		color: "#0078D3",
		fontFamily: "Inter",
		fontSize: "14px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "17px",
	},
}));

const SectionInfo = ({ icon, title, subTitle, btnTitle, onClick }) => {
	const classes = useStyle();

	return (
		<Box
			className={classes.settingsSection}
			display="flex"
			flexDirection="column"
			marginBottom="24px"
		>
			<Typography classes={{ root: classes.sectionTitle }}>
				{icon}
				{title}
			</Typography>
			<div className={classes.container}>
				<Typography classes={{ root: classes.subTitle }}>{subTitle}</Typography>
				{btnTitle && (
					<Button className={classes.button} variant="text" onClick={onClick}>
						{btnTitle}
					</Button>
				)}
			</div>
		</Box>
	);
};

export default SectionInfo;
