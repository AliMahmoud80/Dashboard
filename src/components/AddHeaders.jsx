import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  headersTop: {
    marginBottom: "8px",
  },
  topIcon: {
    display: "flex",
    "& >svg": {
      width: "22px",
      height: "22px",
      color: "#333333",
    },
  },
  topHeading: {
    fontWeight: "600",
    color: "#181818",
    marginLeft: "8px",
  },
  botHeading: {
    color: "#5D5D5D",
  },
}));

function AddHeaders({ icon, header, subHeader, className }) {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={className}>
      <Grid item xs={12} container className={classes.headersTop}>
        <Box className={classes.topIcon}>{icon}</Box>
        <Typography variant="h2" className={classes.topHeading}>
          {header}
        </Typography>
      </Grid>
      <Grid item xs={12} container className={classes.headersBot}>
        <Typography variant="h4" className={classes.botHeading}>
          {subHeader}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AddHeaders;
