import { Fragment, useState } from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import BillingInfo from "../BillingInfo";
import invoice from "../../assets/invoice.svg";
import InvoiceData from "../InvoiceData";

const useStyle = makeStyles((theme) => ({
  section: {
    paddingTop: "8px",
  },
  button: {
    height: "46px",
    color: "#fff",
    paddingInline: "36px",
    paddingBlock: "11px",
    background: "#0078D3",
    "&:hover": {
      color: "#0078D3",
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
  pagination: {
    "& .MuiPaginationItem-outlined": {
      border: "1px solid #D9D9D9",
      borderRadius: "4px",
    },
    "& .Mui-selected": {
      color: "#1890FF",
      borderColor: "#1890FF",
      backgroundColor: "#fff",
    },
  },
  tableFooter: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
  },
}));

const Billing = () => {
  const classes = useStyle();
  const [upgrade, setUpgrade] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.section}>
        <Grid
          item
          xs={3}
          justifyContent="flex-start"
          style={{ display: "flex" }}
        >
          <BillingInfo
            title="Account Valid Until"
            subTitle="1 April 2022"
            timeLeft="3 Days Left "
          />
        </Grid>
        <Grid
          item
          xs={3}
          justifyContent="flex-start"
          style={{ display: "flex" }}
        >
          <BillingInfo title="Subscription" subTitle="$0.00" />
        </Grid>
        <Grid
          item
          xs={3}
          justifyContent="flex-start"
          style={{ display: "flex" }}
        >
          <BillingInfo title="Subscription" subTitle="Basic Plan" />
        </Grid>
        <Grid item xs={3} justifyContent="flex-end" style={{ display: "flex" }}>
          {!upgrade && (
            <Button
              onClick={() => setUpgrade(true)}
              variant="contained"
              className={classes.button}
            >
              Upgrade Plan
            </Button>
          )}
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
      <Grid container>
        <Grid item xs={12}>
          <Box
            className={classes.settingsSection}
            display="flex"
            flexDirection="column"
            marginBottom="24px"
          >
            <Typography classes={{ root: classes.sectionTitle }}>
              <img src={invoice} alt="invoice" />
              Invoice
            </Typography>
            <Typography classes={{ root: classes.subTitle }}>
              {upgrade
                ? "History of your Invoice"
                : "You don’t have invoice history yet"}
            </Typography>
          </Box>
        </Grid>
        {upgrade && (
          <>
            <Grid item xs={12}>
              <InvoiceData />
            </Grid>
            <Grid container xs={12} className={classes.tableFooter}>
              <Pagination
                classes={{
                  ul: classes.pagination,
                }}
                page={currentPage}
                count={3}
                variant="outlined"
                shape="rounded"
                boundaryCount={1}
                siblingCount={2}
                onChange={(_, page) => changeCurrentPage(page)}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Fragment>
  );
};

export default Billing;
