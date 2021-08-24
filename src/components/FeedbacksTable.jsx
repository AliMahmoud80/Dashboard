import {
  Button,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  tableHead: {
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
}));

const FeedbacksTable = ({ rows, viewForm, closeForm, openForm }) => {
  const classes = useStyle();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell} align="left" width="6%">
              <Checkbox color="primary" style={{ padding: "0" }} />
              <span className="table-border"></span>
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width="40%">
              Date
              <span className="table-border"></span>
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width="40%">
              From
              <span className="table-border"></span>
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width="10%">
              Status
              <span className="table-border"></span>
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width="10%">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                <Checkbox color="primary" style={{ padding: "0" }} />
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.formName}</TableCell>
              <TableCell align="left">
                <Typography
                  variant="h5"
                  style={{ lineHeight: "18px" }}
                  className={`status-tag ${
                    row.status ? "status-tag-open" : "status-tag-closed"
                  }`}
                >
                  {row.status ? "Open" : "Closed"}
                </Typography>
              </TableCell>
              <TableCell
                style={{ minWidth: "170px" }}
                align="left"
                className={classes.action}
              >
                <Box className="form-result-actions">
                  <Button
                    color="primary"
                    disableRipple
                    onClick={() => {
                      viewForm(row.id);
                    }}
                  >
                    View
                  </Button>
                  {row.status && (
                    <Button
                      style={{
                        backgroundColor: "#FD3A57",
                        color: "#FDFDFD",
                        fontWeight: "500",
                        width: "72px",
                        height: "32px",
                      }}
                      onClick={() => closeForm(row.id)}
                    >
                      Close
                    </Button>
                  )}
                  {!row.status && (
                    <Button
                      style={{
                        backgroundColor: "#06C86B",
                        color: "#FDFDFD",
                        fontWeight: "500",
                        width: "72px",
                        height: "32px",
                      }}
                      onClick={() => openForm(row.id)}
                    >
                      Open
                    </Button>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbacksTable;
