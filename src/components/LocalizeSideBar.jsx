import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AccordionSummary } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles(() => ({
  categoriesMenu: {
    borderRight: "1px solid #EDEBE9",
    padding: "24px 26px 0 16px",
    height: "100%",
    background: "#fff",
    boxSizing: "border-box",
  },
  categoriesMenuSubTitle: {
    fontWeight: "600",
    paddingTop: "24px",
    paddingBottom: "16px",
  },
  accordionStyle: {
    backgroundColor: "transparent",
    padding: "0",
    boxShadow: "none",
  },
  dropdownTitle: {
    fontWeight: "600",
    marginRight: "auto",
    marginLeft: "12px",
  },

  dropDownInnerContainer: {
    width: "100%",
  },
  dropDownInnerContainer__list: {
    paddingLeft: "7px",
  },
  dropdownTitleInner: {
    fontWeight: "500",
    paddingLeft: "14px",
  },
  contentTitle: {
    margin: "24px 0px 8px",
    fontWeight: "600",
  },
  contentSubTitle: {
    marginBottom: "40px",
    fontWeight: "300",
  },
}));

const LocalizeSideBar = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(true);
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState({
    checkedC: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const toggleMenu = () => {
    setShowMenu((m) => !m);
  };
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <List className={classes.categoriesMenu}>
      {["Main menu", "Main Courses", "Desserts", "Drinks"].map(
        (innerText, index) => (
          <div>
            <Accordion
              className={classes.accordionStyle}
              expanded={expanded === `panel${index}`}
              onChange={handleAccordionChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant="h2" className={classes.dropdownTitle}>
                  {innerText}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {["S’mores", "Churros", "Lamingstons", "Ice Cream Pudding"].map(
                  (innerDropDownText, index) => (
                    <List
                      component="div"
                      disablePadding
                      className={classes.dropDownInnerContainer}
                    >
                      <ListItem
                        button
                        disableGutters
                        className={classes.dropDownInnerContainer__list}
                      >
                        <Typography
                          variant="h4"
                          className={classes.dropdownTitleInner}
                        >
                          {innerDropDownText}
                        </Typography>
                      </ListItem>
                    </List>
                  )
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        )
      )}
    </List>
  );
};

export default LocalizeSideBar;
