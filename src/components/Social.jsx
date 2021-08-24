import { Grid, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
	container: {
		marginBottom: "20px",
		width: "100%",
		overflow: "hidden",
		borderRadius: "4px",
		border: "1px solid #EDEBE9",
	},
	input: {
		width: "477px",
	},
	iconContainer: {
		display: "flex",
		paddingInline: "12px",
		backgroundColor: "#EDEBE9",
		"& img": {
			width: "100%",
			height: "100%",
		},
	},
	inputLabel: {
		display: "flex",
		alignItems: "center",
		fontSize: "16px",
		fontWeight: "500",
		marginBottom: "8px",
		color: "#5c5c5d",
	},
	inputLabel: {
		fontFamily: "Inter",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "19px",
		letterSpacing: "0px",
		color: "#5c5c5d",
	},
	inputField: {
		marginTop: "8px",
		"& input": {
			height: "0",
		},
		"& .MuiInputBase-root": {
			marginBottom: "24px",
			fontSize: "14px",
			color: "#000",
			minHeight: "43px",
		},
	},
	icon: {
		marginRight: "12px",
	},
	title: {
		fontSize: "16px",
		fontWeight: "400",
		marginBottom: "4px",
		color: "#181818, 100%",
		textTransform: "capitalize",
	},
	noBorder: {
		border: "none",
	},
}));

const Social = ({ icon, title, placeholder }) => {
	const classes = useStyle();

	return (
		<Grid container spacing={0} className={classes.container}>
			<Grid
				className={classes.iconContainer}
				item
				xs={3}
				alignItems="center"
				justifyContent="flex-start"
			>
				<div className={classes.icon}>
					<img style={{ maxWidth: "100%" }} src={icon} alt={title} />
				</div>
				<Typography className={classes.title}>{title}</Typography>
			</Grid>
			<Grid item xs={9}>
				<TextField
					fullWidth
					variant="outlined"
					placeholder={placeholder}
					InputProps={{
						classes: { notchedOutline: classes.noBorder },
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default Social;
