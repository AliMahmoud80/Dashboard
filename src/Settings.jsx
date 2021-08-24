import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PropTypes from 'prop-types';
import { Grid, Box, AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// Settings Tabs
import GeneralSettings from './components/Settings/GeneralSettings';
// Icons
import {
  InfoOutlined as InfoIcon,
  PhoneAndroid as PhoneIcon,
  TabletMac as TabletMacIcon,
  SettingsOutlined as SettingsIcon,
} from '@material-ui/icons';
import BillingIcon from './components/Icons/Billing';
import AccountSettingsIcon from './components/Icons/AccountSettings';
import TabletMenu from './components/Settings/TabletMenu';
import QRMenu from './components/Settings/QRMenu';
import InformationPage from './components/Settings/InformationPage';
import AccountSettings from './components/Settings/AccountSettings';
import Billing from './components/Settings/Billing';
import WarningPopUp from './components/WarningPopUp';
import swal from 'sweetalert';

// Styles
const useStyle = makeStyles((theme) => ({
  tabPanel: {
    width: '100%',
    padding: '24px',
  },
  statusSelect: {
    height: '40px',
    width: '100%',
  },
  searchInput: {
    height: '40px',
  },
  controlButtonsContainer: {
    gap: '8px',
    '& button': {
      padding: '8px 16px',
      border: '1px solid #F3F2F1',
      borderRadius: '8px',
    },
  },
  filterBarContainer: {
    gap: '24px',
  },
}));

// Tabs Configs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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
    'aria-controls': `survey-tabpanel-${index}`,
  };
}

const Settings = () => {
  const classes = useStyle();
  const [value, setValue] = useState(0); // TabPanel

  const handleShowUpdated = () => {
    swal({
      title: 'Updated successfully',
      icon: 'success',
      buttons: false,
    });
  };
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    swal({
      title: 'Warning!',
      icon: 'warning',
      text: 'You have unsaved changes. Are you sure you want to navigate away?',
      buttons: ['Cancel', 'OK Navigate'],
    });
  };
  const handleHideWarning = () => {
    setShowWarning(false);
  };
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { id: 1, label: 'General Settings', Icon: SettingsIcon },
    { id: 2, label: 'Tablet Menu', Icon: TabletMacIcon },
    { id: 3, label: 'QR Menu', Icon: PhoneIcon },
    { id: 4, label: 'Information Page', Icon: InfoIcon },
    { id: 5, label: 'Account Settings', Icon: AccountSettingsIcon },
    { id: 6, label: 'Billing & Plans', Icon: BillingIcon },
  ];

  return (
    <Grid container style={{ paddingLeft: '250px', minWidth: '1300px' }}>
      <Sidebar />
      <Grid item xs>
        {/* Topbar */}
        <Grid container>
          <Topbar
            guideButtons
            title='Settings'
            subTitle='Set all your general settings here'
            btnTitle='Save'
            btnCancel='Cancel'
            isBtn={true}
            onBtnClick={handleShowUpdated}
            onBtnCancel={handleShowWarning}
          />
        </Grid>
        <Grid container>
          {/* Tabs Bar */}
          <AppBar position='static'>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='settings tabs'
              textColor='primary'
              classes={{ scroller: classes.tabPar }}
            >
              {tabs.map((tab, i) => (
                <Tab
                  key={tab.id}
                  label={tab.label}
                  icon={<tab.Icon style={{ marginBottom: '0' }} />}
                  {...a11yProps(i)}
                />
              ))}
              {/* <Tab
								label="Survey Results"
								icon={<img src={surveyIcon} alt="form results" />}
								{...a11yProps(2)}
							/> */}
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.tabPanel}>
            <GeneralSettings />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanel}>
            <TabletMenu />
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabPanel}>
            <QRMenu />
          </TabPanel>

          <TabPanel value={value} index={3} className={classes.tabPanel}>
            <AccountSettings />
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.tabPanel}>
            <Billing />
          </TabPanel>
        </Grid>
      </Grid>
      <WarningPopUp open={showWarning} onClose={handleHideWarning} />
    </Grid>
  );
};

export default Settings;
