import { Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CardTablet from '../CardTablet';

import {
  HomeOutlined,
  LanguageOutlined,
  InfoOutlined,
  ShoppingCartOutlined,
  TextsmsOutlined,
  MonetizationOnOutlined,
} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  section: {},
  input: {
    width: '475px',
  },
  textFiledContainer: {
    height: '40px',
    width: '150px',
    border: '2px solid#EDEBE9',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  filedLabel: {
    display: 'block',
    width: '77px',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '38px',
    letterSpacing: '0em',
    textAlign: 'center',
    background: '#F1F1F1',
    padding: '0',
    margin: '0',
  },
  inputLabel: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '19px',
    letterSpacing: '0px',
    color: '#5c5c5d',
  },
  underline: {
    height: '100%',
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  noBorder: {
    border: 'none',
    height: '100%',
    padding: 0,
  },
}));

const TabletMenu = () => {
  const classes = useStyle();

  return (
    <Grid container className={classes.section}>
      <Grid item xs='6'>
        <CardTablet name='Language' title='Display Language Button'>
          <LanguageOutlined />
        </CardTablet>

        <CardTablet name='Homepage' title='Display Return to Homepage'>
          <HomeOutlined />
        </CardTablet>

        <Grid
          container
          direction='row'
          spacing={0}
          alignItems='center'
          className={classes.input}
          justifyContent='space-between'
        >
          <Grid item>
            <Typography variant='h6' className={classes.inputLabel}>
              Time Threshold
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction='row'
              spacing={0}
              alignItems='center'
              justifyContent='center'
              className={classes.textFiledContainer}
            >
              <Grid item xs='6' style={{ height: '100%' }}>
                <TextField
                  variant='outlined'
                  className={classes.underline}
                  InputProps={{
                    style: { height: '100%', padding: 0 },
                    classes: { notchedOutline: classes.noBorder },
                  }}
                  inputProps={{
                    width: '100%',
                    style: { padding: 0, height: '100%', textAlign: 'center' },
                  }}
                />
              </Grid>
              <Grid item xs='6'>
                <span className={classes.filedLabel}>Minutes</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs='6'>
        <CardTablet name='Cart' title='Display Cart Button'>
          <ShoppingCartOutlined />
        </CardTablet>
        <CardTablet name='Feedback' title='Display Feedback Button'>
          <TextsmsOutlined />
        </CardTablet>
        <CardTablet name='Currency' title='Display Prices'>
          <MonetizationOnOutlined />
        </CardTablet>
      </Grid>
    </Grid>
  );
};

export default TabletMenu;
