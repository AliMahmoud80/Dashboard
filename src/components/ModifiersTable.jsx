import {
  Button,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Box,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// Icons
import earthIcon from "../assets/earth.png";
import penIcon from "../assets/penIcon.svg";
import trashIcon from "../assets/trashIcon.svg";

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
  actionsBox: {
    "& button": {
      fontSize: "14px",
      fontWeight: "500",
      marginRight: "16px",

      "&:last-of-type": {
        marginRight: "0",
      },
    },
  },
}));

const ModifiersTable = ({ rows }) => {
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
              Group Name
              <span className="table-border"></span>
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width="40%">
              Modifiers
              <span className="table-border"></span>
            </TableCell>
            <TableCell className={classes.tableCell} align="left" width="12%">
              Active
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.modifiers}</TableCell>
              <TableCell align="left">
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  style={{ marginLeft: "10px" }}
                >
                  <Switch checked={row.active} />
                </Box>
              </TableCell>
              <TableCell
                style={{ minWidth: "170px" }}
                align="left"
                className={classes.action}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  width={1}
                  className={classes.actionsBox}
                >
                  <Button
                    startIcon={<img src={earthIcon} width="16" height="16" />}
                  >
                    Localize
                  </Button>
                  <Button
                    startIcon={<img src={penIcon} width="16" height="16" />}
                  >
                    Edit
                  </Button>
                  <Button
                    startIcon={<img src={trashIcon} width="16" height="16" />}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ModifiersTable;
