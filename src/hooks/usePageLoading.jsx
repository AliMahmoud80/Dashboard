import { useContext } from 'react';
import PageLoadingContext from '../contexts/PageLoading';
export const usePageLoading = () => {
  return useContext(PageLoadingContext);
};
