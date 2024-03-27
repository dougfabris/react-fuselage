import { useContext } from 'react';

import { AppContext } from '../contexts/AppContext';

export const useAppData = () => {
	const appData = useContext(AppContext);

	return appData;
};
