import React, { useContext } from 'react';
import { Fragment } from 'react';
import { useLayoutEffect, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import PageLoadingContext from './contexts/PageLoading';
import SetPageLoadingContext from './contexts/SetPageLoading';
import { usePageLoading } from './hooks/usePageLoading';
import { useSetPageLoading } from './hooks/useSetPageLoading';
const Page = (props) => {
  const isLoading = usePageLoading();
  const setIsLoading = useSetPageLoading();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    setIsLoading(false);
  }, [location.pathname]);
  return <Fragment>{props.children}</Fragment>;
};

export default Page;
