import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import CardComp from './components/CardComp';
import MoveDialog from './components/MoveDialog';
import newbrand from './assets/categoriesIcon/new.png';
import favorite from './assets/categoriesIcon/favorite.png';
import biscuits from './assets/categoriesIcon/biscuits.png';
import cake from './assets/categoriesIcon/cake.png';

const useStyles = makeStyles(() => ({
  cardContainer: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
  },
  categoryContainer: {
    height: '100vh',
  },
  cardTitle: {
    color: '#000000',
    fontWeight: '700',
  },
  cardSubTitle: {
    color: '#5D5D5D',
    marginTop: '7px',
    marginBottom: '25px',
  },
}));

const Items = () => {
  const classes = useStyles();
  const [moveDialog, setMoveDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    checkedC: true,
  });
  const [pageTitle, setPageTitle] = useState('');
  const [pageSubTitle, setPageSubTitle] = useState('');

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const openMoveDialog = () => {
    setMoveDialog(true);
  };
  const closeMoveDialog = () => {
    setMoveDialog(false);
  };

  // Fetch Categories.
  useEffect(() => {
    // Call API...

    // Set dummy data
    setCategories([
      {
        id: 1,
        name: 'Main Courses',
        items: [],
      },
      {
        id: 2,
        name: 'Desserts',
        items: [],
      },
      {
        id: 3,
        name: 'Drinks',
        items: [],
      },
    ]);
  }, []);

  return (
    <Grid container style={{ paddingLeft: '250px', minWidth: '1300px' }}>
      {/* Sidebar */}
      <Sidebar />
      <Grid item xs>
        {/* Main Content */}
        <Grid container>
          <Topbar
            title='Desserts'
            subTitle='Here you can see all categories that you have created. You can try to create a new one also!'
            btnTitle='New item'
            searchBar
            link='/addnewitem'
            guideButtons
          />
        </Grid>
        <Grid container className={classes.cardContainer} xs>
          <input
            type='text'
            value={pageTitle}
            className='clear-input input-title'
            placeholder='Type a item name '
            onChange={(e) => {
              setPageTitle(e.target.value);
            }}
          />
          {/* <Typography variant="h2" className={classes.cardTitle}>
            Our desserts items
          </Typography> */}
          {/* <Typography variant="h4" className={classes.cardSubTitle}>
            You will be happy with our desserts dishes
          </Typography> */}
          <input
            type='text'
            value={pageSubTitle}
            className='clear-input input-subtitle'
            placeholder='Type a item description'
            onChange={(e) => {
              setPageSubTitle(e.target.value);
            }}
          />
          <Grid container spacing={2} style={{ marginTop: '17px' }}>
            {/* <Grid item xs={3}> */}
            <CardComp
              cardInnerTitle='S’mores'
              cardInnerSubTitle='USD 10'
              buttonText='Edit'
              showMenu={true}
              img={biscuits}
              isMove={true}
              onMove={openMoveDialog}
            />
            {/* </Grid>
              <Grid item xs={3}> */}
            <CardComp
              cardInnerTitle='Churros'
              cardInnerSubTitle='USD 12'
              buttonText='Edit'
              showMenu={true}
              img={biscuits}
              isMove={true}
              onMove={openMoveDialog}
            />
            {/* </Grid> */}
            {/* <Grid item xs={3}> */}
            <CardComp
              cardInnerTitle='Lamingston'
              cardInnerSubTitle='USD 20'
              buttonText='Edit'
              showMenu={true}
              img={cake}
              itemType={favorite}
              isMove={true}
              onMove={openMoveDialog}
            />
            {/* </Grid>
              <Grid item xs={3}> */}
            <CardComp
              cardInnerTitle='Lamingston'
              cardInnerSubTitle='USD 25'
              buttonText='Edit'
              showMenu={true}
              img={cake}
              itemType={newbrand}
              isMove={true}
              onMove={openMoveDialog}
            />
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <MoveDialog open={moveDialog} onClose={closeMoveDialog} />
    </Grid>
  );
};

export default Items;
