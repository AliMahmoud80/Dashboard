import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CardDefault from "./components/CardDefault";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  AppBar,
  Tab,
  Tabs,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import FeedbacksTable from "./components/FeedbacksTable";
import TableFooter from "./components/TableFooter";
import DateRangePicker from "./components/DateRangePicker";
import SurveyResultDialog from "./components/SurveyResultDialog";
import { makeStyles } from "@material-ui/styles";
// Icons
import sheetIcon from "./assets/sheetIcon.svg";
import surveyIcon from "./assets/surveyIcon.svg";
import downloadIcon from "./assets/downloadIcon.svg";
import redoIcon from "./assets/redoIcon.svg";

// Styles
const useStyle = makeStyles((theme) => ({
  tabPanel: {
    width: "100%",
    padding: "24px",
  },
  statusSelect: {
    height: "40px",
    width: "100%",
  },
  searchInput: {
    height: "40px",
  },
  controlButtonsContainer: {
    gap: "8px",
    "& button": {
      padding: "8px 16px",
      border: "1px solid #F3F2F1",
      borderRadius: "8px",
      minWidth: "auto",
    },
  },
  filterBarContainer: {
    gap: "24px",
  },
}));

// Tabs Configs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box> {children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `survey-tab-${index}`,
    "aria-controls": `survey-tabpanel-${index}`,
  };
}

const Feedback = () => {
  const classes = useStyle();

  const [value, setValue] = useState(0); // TabPanel
  const [surveyResult, setSurveyResult] = useState([]); // Forms Data
  const [formStatus, setFormStatus] = useState(1);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultDialog, setResultDialog] = useState(false);
  const [forms, setForms] = useState([]);
  const [dialogSurveyId, setDialogSurveyId] = useState();

  const changePageSize = (size) => setPageSize(size);
  const changecurrentPage = (page) => setCurrentPage(page);

  // Fetch Data Onload
  useEffect(() => {
    setSurveyResult([
      {
        id: 1,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sample Form",
        status: true,
      },
      {
        id: 2,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Testing",
        status: true,
      },
      {
        id: 3,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sauce Please",
        status: false,
      },
      {
        id: 4,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sample Form",
        status: false,
      },
      {
        id: 5,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sample Form",
        status: true,
      },
      {
        id: 6,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sample Form",
        status: false,
      },
      {
        id: 7,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sample Form",
        status: true,
      },
      {
        id: 8,
        date: "Mon, 13 June 2021 - 12:23",
        formName: "Sample Form",
        status: true,
      },
    ]);

    // Fetch Forms
    setForms([
      {
        id: 1,
        title: "Sample Form",
        date: "24 Jun 2021",
        isActive: true,
        questionsNumber: 8,
      },
      {
        id: 2,
        title: "Customer Happiness ",
        date: "24 Jun 2021",
        isAActive: false,
        questionsNumber: 8,
      },
      {
        id: 3,
        title: "Example Only",
        date: "24 Jun 2021",
        isActive: false,
        questionsNumber: 8,
      },
    ]);
  }, []);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const changeStatus = (e) => {
    setFormStatus(e.target.value);
  };

  // Table functionality
  const closeForm = (id) => {
    // API Calls
    console.log("closing" + id);
  };
  const openForm = (id) => {
    // API Calls
    console.log("opining" + id);
  };

  // Open Survey Result Dialog
  const viewForm = (id) => {
    setDialogSurveyId(id);
    setResultDialog(true);
  };

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid item xs>
        {/* Topbar */}
        <Grid container>
          <Topbar
            title="Feedbacks"
            subTitle="On this page you can create your own survey form"
            btnTitle="New Form"
            link="/addnewform"
            searchBar
            guideButtons
          />
        </Grid>
        <Grid container>
          {/* Tabs Bar */}
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="feedback tabs"
              textColor="primary"
              classes={{ scroller: classes.tabPar }}
            >
              <Tab
                label="Survey Forms"
                icon={<img src={sheetIcon} alt="form sheet" />}
                {...a11yProps(0)}
              />
              <Tab
                label="Survey Results"
                icon={<img src={surveyIcon} alt="form results" />}
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>
          {/* Survey Forms */}
          <TabPanel value={value} index={0} className={classes.tabPanel}>
            <Grid container direction="row" spacing={3}>
              {/* Forms */}
              {forms.map((f) => {
                return (
                  <Grid
                    item
                    classes={{ root: classes.cardsContainer }}
                    key={f.id}
                  >
                    <CardDefault
                      title={f.title}
                      questionsNumber={f.questionsNumber}
                      date={f.date}
                      isActive={f.isActive}
                    ></CardDefault>
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
          {/* Survey Result */}
          <TabPanel value={value} index={1} className={classes.tabPanel}>
            {/* Search Filters */}
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Select
                  id="status"
                  variant="outlined"
                  value={formStatus}
                  onChange={changeStatus}
                  className={classes.statusSelect}
                  MenuProps={{
                    classes: { paper: "custom-selectMenu" },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "center",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "center",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={1}>All Status</MenuItem>
                  <MenuItem value={2}>Closed</MenuItem>
                  <MenuItem value={3}>Open</MenuItem>
                </Select>
              </Grid>
              {/* Date Range Picker */}
              <Grid item xs={3}>
                <DateRangePicker />
              </Grid>
              {/* Search Field */}
              <Grid item xs>
                <TextField
                  fullWidth
                  id="search"
                  type="search"
                  placeholder="Search"
                  variant="filled"
                  className={classes.searchInput}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Grid>
              {/* Control Buttons */}
              <Grid item classes={{ root: classes.controlButtonsContainer }}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  className={classes.controlButtonsContainer}
                >
                  <Button
                    color="primary"
                    startIcon={<img src={downloadIcon} alt="Download" />}
                  >
                    Export
                  </Button>
                  <Button
                    color="primary"
                    startIcon={<img src={redoIcon} alt="reload" />}
                  >
                    Reload
                  </Button>
                </Box>
              </Grid>
            </Grid>
            {/* Data Table */}
            <Grid container style={{ marginTop: "24px" }}>
              <Grid item xs>
                <FeedbacksTable
                  rows={surveyResult}
                  viewForm={viewForm}
                  openForm={openForm}
                  closeForm={closeForm}
                />
                <TableFooter
                  currentPage={currentPage}
                  changeCurrentPage={changecurrentPage}
                  pageSize={pageSize}
                  changePageSize={changePageSize}
                />
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
      {/* Survey Result Dialog */}
      {resultDialog && (
        <SurveyResultDialog
          data={surveyResult[dialogSurveyId - 1]}
          open={resultDialog}
          onClose={() => setResultDialog(false)}
        />
      )}
    </Grid>
  );
};

export default Feedback;
