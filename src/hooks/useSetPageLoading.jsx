import SetPageLoadingContext from '../contexts/SetPageLoading';
import { useContext } from 'react';
export const useSetPageLoading = () => {
  return useContext(SetPageLoadingContext);
};
