import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
	container: {
		width: "100%",
		marginBottom: "20px",
	},
	titleContainer: {
		marginBottom: "8px",
	},
	dateContainer: {
		marginRight: "16px",
	},
	timeLeftContainer: {},
	title: {
		fontFamily: "Inter",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "19px",
		letterSpacing: "0px",
		textAlign: "left",
		color: "#181818",
	},
	subTitle: {
		fontFamily: "Inter",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "19px",
		letterSpacing: "0px",
		textAlign: "left",
		color: "#181818",
	},
	timeLeft: {
		fontFamily: "Inter",
		fontSize: "14px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "17px",
		letterSpacing: "0px",
		textAlign: "left",
		color: "#F71D1D",
	},
}));

const BillingInfo = ({ title, subTitle, timeLeft }) => {
	const classes = useStyle();

	return (
		<Grid
			container
			spacing={0}
			className={classes.container}
			alignItems="flex-start"
			direction="column"
			justifyContent="center"
		>
			<Grid item className={classes.titleContainer}>
				<Typography className={classes.title}>{title}</Typography>
			</Grid>
			<Grid item>
				<Grid container alignItems="center" justifyContent="flex-start">
					<Grid item className={classes.dateContainer}>
						<Typography className={classes.subTitle}>{subTitle}</Typography>
					</Grid>
					{timeLeft && (
						<Grid item className={classes.timeLeftContainer}>
							<Typography className={classes.timeLeft}>{timeLeft}</Typography>
						</Grid>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default BillingInfo;
