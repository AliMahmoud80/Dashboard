import { useState } from 'react';
import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    padding: '50px 50px 0 40px !important',
    overflow: 'hidden',
    minWidth: '860px',
  },
  actionsBox: {
    '& button': {
      fontSize: '14px',
      fontWeight: '500',
      marginRight: '16px',

      '&:last-of-type': {
        marginRight: '0',
      },
    },
  },
  dialogActions: {
    justifyContent: 'flex-start',
    padding: '32px 40px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '143px',
  },
}));
const MoveDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:525px)');

  const [item, setItem] = useState(1);

  const handleChangeItem = (e) => {
    setItem(e.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={'md'}>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Grid container xs className={classes.container}>
          <Typography style={{ paddingRight: '11px' }}>
            Move dessert to :
          </Typography>
          <Grid item xs>
            <Select
              fullWidth
              autoWidth={!matches}
              id='status'
              variant='outlined'
              value={item}
              onChange={handleChangeItem}
              className={classes.statusSelect}
              MenuProps={{
                classes: { paper: 'custom-selectMenu' },
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'center',
                },
                getContentAnchorEl: null,
              }}
              placeholder='Select item'
            >
              <MenuItem value={1}>Dessert</MenuItem>
              <MenuItem value={2}>Main Courses</MenuItem>
              <MenuItem value={3}>Drinks</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button
          variant='outlined'
          style={{ fontWeight: '400', border: '1px solid #F3F2F1' }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button color='primary' variant='contained'>
          Move
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MoveDialog;
