import { Fragment, useState } from "react";
import LockIcon from "../Icons/Lock";
import { Grid, TextField, InputLabel, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PasswordModal from "../ChangePassword";

const useStyle = makeStyles(theme => ({
	section: {
		"& > *": {
			maxWidth: "510px",
		},
	},
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
	inputLabel: {
		display: "flex",
		alignItems: "center",
		fontSize: "16px",
		fontWeight: "500",
		marginBottom: "8px",
		color: "#5c5c5d",
		width: "100%",
	},
	inputField: {
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
	statusSelect: {
		height: "43px",
	},
	autocomplete: {
		paddingTop: "0 !important",
		paddingBottom: "0 !important",
	},
	button: {
		color: "#0078D3",
		fontFamily: "Inter",
		fontSize: "14px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "17px",
		letterSpacing: "0px",
		textAlign: "left",
		paddingInline: "18px",
		paddingBlock: "12px",
		borderRadius: "8px",
	},
}));

const AccountSettings = () => {
	const classes = useStyle();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<PasswordModal open={open} onCloseModal={handleClose} />
			<Grid container spacing={2} display="flex">
				<Grid item xs={6} className={classes.section}>
					<Grid container>
						<Grid item xs={12}>
							<InputLabel className={classes.inputLabel}>Full Name</InputLabel>
							<TextField
								fullWidth
								type="text"
								variant="outlined"
								placeholder="Dr. Salah Al Qaseem"
								classes={{ root: classes.inputField }}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputLabel className={classes.inputLabel}>Email</InputLabel>
							<TextField
								fullWidth
								type="text"
								variant="outlined"
								placeholder="salahalqaseem@gmail.com"
								classes={{ root: classes.inputField }}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6} className={classes.section}>
					<Grid container>
						<Grid item xs={12}>
							<InputLabel className={classes.inputLabel}>Phone</InputLabel>
							<TextField
								fullWidth
								type="text"
								variant="outlined"
								placeholder="+310123456789123"
								classes={{ root: classes.inputField }}
							/>
						</Grid>
						<Grid item xs={12}>
							<InputLabel className={classes.inputLabel}>City</InputLabel>
							<TextField
								fullWidth
								type="text"
								variant="outlined"
								placeholder="Kyiv"
								classes={{ root: classes.inputField }}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<div
				style={{
					height: "1px",
					background: "#EDEBE9",
					marginTop: "32px",
					marginBottom: "24px",
				}}
			/>
			<Button
				variant="outlined"
				onClick={handleOpen}
				className={classes.button}
				startIcon={<LockIcon />}
			>
				Change Password
			</Button>
		</Fragment>
	);
};

export default AccountSettings;
