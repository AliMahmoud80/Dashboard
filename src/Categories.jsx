import React, { useState, useEffect } from 'react';
import CardComp from './components/CardComp';
// Components
import Sidebar from './components/Sidebar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Topbar from './components/Topbar';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import icecream from './assets/categoriesIcon/icecream.png';
import juice from './assets/categoriesIcon/juice.png';
import burgerIcon from './assets/burgerIcon.svg';

// Will remove

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

const Categories = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    checkedC: true,
  });
  const [pageTitle, setPageTitle] = useState('');
  const [pageSubTitle, setPageSubTitle] = useState('');

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
      {/* Main Content */}
      <Grid container direction='column' xs>
        <Grid container>
          <Topbar
            title='All Categories'
            subTitle='Here you can see all categories that you have created. You can try to create a new one also!'
            btnTitle='New Categories'
            searchBar
            link='/addnewcategory'
            guideButtons
          />
        </Grid>
        <Grid container className={classes.cardContainer}>
          {/* <Typography variant='h2' className={classes.cardTitle}>
            Main Menu
          </Typography> */}
          <input
            type='text'
            value={pageTitle}
            className='clear-input input-title'
            placeholder='Type a menu name '
            onChange={(e) => {
              setPageTitle(e.target.value);
            }}
          />
          {/* <Typography variant='h4' className={classes.cardSubTitle}>
            All your favorites dishes availble in our menu
          </Typography> */}
          <input
            type='text'
            value={pageSubTitle}
            className='clear-input input-subtitle'
            placeholder='Type a menu description'
            onChange={(e) => {
              setPageSubTitle(e.target.value);
            }}
          />
          <Grid container spacing={2} style={{ marginTop: '17px' }}>
            <CardComp
              cardInnerTitle='Main Courses'
              cardInnerSubTitle='Category'
              buttonText2='Enter'
              buttonText='Edit'
              showMenu={true}
              img={icecream}
              isLocalize={true}
            />
            <CardComp
              cardInnerTitle='Desserts'
              cardInnerSubTitle='Category'
              buttonText2='Enter'
              buttonText='Edit'
              showMenu={true}
              img={icecream}
              isLocalize={true}
            />
            <CardComp
              cardInnerTitle='Drinks'
              cardInnerSubTitle='Category'
              buttonText2='Enter'
              buttonText='Edit '
              showMenu={true}
              img={juice}
              isLocalize={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
