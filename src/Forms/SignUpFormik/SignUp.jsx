import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    alignItems: 'center',
    padding: '4px 0',
    boxSizing: 'initial',
  },
  circle: {
    display: 'flex',
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F2F1',
    color: '#666666',
  },
  circleActive: {
    color: 'white',
    backgroundColor: '#0078D3',
  },
  active: {
    padding: '4px',
    color: 'white',
    border: '1px solid #0078D3',
    borderRadius: '50%',
  },
  completed: {
    color: 'white',
    backgroundColor: '#06C86B',
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={[classes.circle, classes.completed].join(' ')}>
          <Typography>{icon}</Typography>
        </div>
      ) : (
        <div
          className={clsx(classes.circle, {
            [classes.circleActive]: active,
          })}
        >
          <Typography>{icon}</Typography>
        </div>
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

function SignUp() {
  const [data, setData] = useState({
    businessName: '',
    solution: ['a'],
    menuLanguage: 'english',
    categoryName: '',
    categoryDescription: '',
    itemNameA: '',
    itemDescriptionA: '',
    itemCategoryA: 'desserts',
    itemCurrencyA: 'usd',
    itemPriceA: '',
    itemNameB: '',
    itemDescriptionB: '',
    itemCategoryB: 'main',
    itemCurrencyB: 'usd',
    itemPriceB: '',
    fullName: '',
    phoneNumber: '',
    phoneExtension: 'eur',
    city: 'kyiv',
    email: '',
    password: '',
    categories: [{ name: '', description: '', image: null }],
    items: [
      {
        name: '',
        description: '',
        category: 'desserts',
        price: '',
        currency: 'usd',
        image: '',
      },
    ],
  });

  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();

  const makeRequest = (data) => {
    console.log('form submitted', data);
    history.push('/signin');
  };

  const handleNext = (newData, final = false) => {
    setData((prevData) => ({ ...prevData, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
    setActiveStep((prevStep) => prevStep - 1);
  };
  const steps = [
    <StepOne handleNext={handleNext} data={data} />,
    <StepTwo handleNext={handleNext} handleBack={handleBack} data={data} />,
    <StepThree handleNext={handleNext} handleBack={handleBack} data={data} />,
    <StepFour handleNext={handleNext} handleBack={handleBack} data={data} />,
    <StepFive handleNext={handleNext} handleBack={handleBack} data={data} />,
  ];

  console.log(data);

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((a, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={QontoStepIcon} />
          </Step>
        ))}
      </Stepper>
      {steps[activeStep]}
    </>
  );
}

export default SignUp;
