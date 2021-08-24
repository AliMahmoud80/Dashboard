import {
  Grid,
  Button,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  tableHead: {
    border: "none",
    background: "#FAFAFA",
    boxShadow: "-18px 0px 0px -17px rgba(0, 0, 0, 0.06)",
  },
  tableCell: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
  },
  unPaid: {
    height: "22px",
    width: "57px",
    color: "#FD3A57",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    borderRadius: "4px",
    textAlign: "center",
    textTransform: "capitalize",
    padding: "1px 8px 1px 8px",
    background: "rgb(253, 58, 87, 0.1)",
  },
  paid: {
    height: "22px",
    width: "41px",
    color: "#06C86B",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    borderRadius: "4px",
    textAlign: "center",
    textTransform: "capitalize",
    padding: "1px 8px 1px 8px",
    background: "rgb(6, 200, 107, 0.1)",
  },
  button: {
    height: "32px",
    width: "57px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    fontFamily: "Inter",
    borderRadius: "8px",
    fontStyle: "normal",
    textAlign: "center",
    background: "#06C86B",
    padding: "8px 16px 8px 16px",
    "&:hover": {
      background: "#06C86B",
    },
  },
  action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#06C86B",
      background: "transparent",
    },
  },
}));

function createData(number, date, plan, price, paid) {
  return { number, date, plan, price, paid };
}

const rows = [
  createData("1", "June 2021", "Pro Plan", "$580", false),
  createData("2", "May 2021", "Pro Plan", "$580", true),
  createData("3", "March 2021", "Pro Plan", "$580", true),
  createData("4", "February 2021", "Pro Plan", "$580", true),
  createData("5", "January 2021", "Pro Plan", "$580", true),
];

const Unpaid = (props) => {
  const classes = useStyle();

  return <div className={classes.unPaid}>{props.children}</div>;
};

const Paid = (props) => {
  const classes = useStyle();

  return <div className={classes.paid}>{props.children}</div>;
};

const InvoiceData = (props) => {
  const classes = useStyle();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell} align="left" width={40}>
              No
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width={353}>
              Date
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width={353}>
              From
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width={353}>
              Sum
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width={89}>
              Status
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width={147}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.plan}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">
                {row.paid ? <Paid>Paid</Paid> : <Unpaid>Unpaid</Unpaid>}
              </TableCell>
              <TableCell align="left" className={classes.action}>
                <Button size="small" variant="text" color="primary">
                  View
                </Button>
                {!row.paid && (
                  <Link to="/upgrade-plan" className={classes.link}>
                    <Button className={classes.button}>Pay</Button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceData;
