import React, { ReactNode, useMemo, useState } from 'react';

import { AppContext } from '../contexts/AppContext';

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [users, setUsers] = useState();
	const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
		setIsLoading(true);
    try {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const value = useMemo(() => ({ users, fetchUsers, isLoading }), [users, isLoading]);

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;