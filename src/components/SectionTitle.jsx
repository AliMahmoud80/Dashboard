import { Box, Typography } from "@material-ui/core";
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
	},
	inputLabel: {
		display: "flex",
		alignItems: "center",
		fontSize: "16px",
		fontWeight: "500",
		marginBottom: "8px",
		color: "#5c5c5d",
		width: "100%",
	},
}));

const SectionTitle = ({ icon, title, subTitle }) => {
	const classes = useStyle();

	return (
		<Box
			className={classes.settingsSection}
			display="flex"
			flexDirection="column"
			marginBottom="24px"
		>
			<Typography classes={{ root: classes.sectionTitle }}>
				<img src={icon} alt={title} />
				{title}
			</Typography>
			<Typography classes={{ root: classes.subTitle }}>{subTitle}</Typography>
		</Box>
	);
};

export default SectionTitle;
