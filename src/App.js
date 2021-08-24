import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import ProgressBar from 'react-topbar-progress-indicator';
import { Fragment } from 'react';
import PageLoadingContext from './contexts/PageLoading';
import SetPageLoadingContext from './contexts/SetPageLoading';
import Page from './Page';
import Content from './Content';

// const SignUp = React.lazy(() => import('./Forms/SignUpFormik/Index'));
// const SignIn = React.lazy(() => import('./Forms/Sign in/SignIn'));
// const ForgotPassword = React.lazy(() =>
//   import('./Forms/Sign in/ForgotPassword')
// );
// const Banner = React.lazy(() => import('./Banner'));
// const Design = React.lazy(() => import('./Design'));
// const Modifier = React.lazy(() => import('./Modifier'));
// const Settings = React.lazy(() => import('./Settings'));
// const Feedback = React.lazy(() => import('./Feedback'));
// const Categories = React.lazy(() => import('./Categories'));
// const AddNewItem = React.lazy(() => import('./AddNewItem'));
// const NewBanner = React.lazy(() => import('./AddNewBanner'));
// const UpgradePlan = React.lazy(() => import('./UpgradePlan'));
// const AddNewCategory = React.lazy(() => import('./AddNewCategory'));
// const ResetPassword = React.lazy(() => import('./Forms/Sign in/ResetPassword'));

function App() {
  const [pageIsLoading, setPageIsLoading] = useState(true);

  return (
    <SetPageLoadingContext.Provider value={setPageIsLoading}>
      <PageLoadingContext.Provider value={pageIsLoading}>
        {pageIsLoading && <ProgressBar />}
        <Page>
          <Content />
        </Page>
      </PageLoadingContext.Provider>
    </SetPageLoadingContext.Provider>
  );
}

export default App;
