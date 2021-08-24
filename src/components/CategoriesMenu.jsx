import { useState } from "react";
// Components
import { AccordionSummary } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Icons
import rice from "../assets/categoriesIcon/rice.png";
import churros from "../assets/categoriesIcon/churros.png";

const useStyles = makeStyles((theme) => ({
  categoriesMenu: {
    backgroundColor: "#F1F1F1",
    padding: "24px 16px 0 16px",
    height: "100%",
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
}));

const CategoriesMenu = ({ categories }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <List className={classes.categoriesMenu}>
      <Typography variant="h1">Menu</Typography>
      <Typography
        variant="h3"
        color="primary"
        className={classes.categoriesMenuSubTitle}
      >
        All Categories
      </Typography>
      {[rice, rice, rice].map((iconInnerImage, index) => (
        <div>
          <Accordion
            className={classes.accordionStyle}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <img src={iconInnerImage} alt={index} />

              <Typography variant="h4" className={classes.dropdownTitle}>
                Main Courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {[churros, churros, churros, churros].map((innerIcon, index) => (
                <List
                  component="div"
                  disablePadding
                  className={classes.dropDownInnerContainer}
                  key={index}
                >
                  <ListItem
                    button
                    disableGutters
                    className={classes.dropDownInnerContainer__list}
                  >
                    <img src={innerIcon} alt={index} />

                    <Typography
                      variant="h4"
                      className={classes.dropdownTitleInner}
                    >
                      Churros
                    </Typography>
                  </ListItem>
                </List>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </List>
  );
};

export default CategoriesMenu;
