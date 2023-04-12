import React, { useMemo, useState } from 'react';

import { AppContext } from '../contexts/AppContext';

const AppProvider = ({ children }) => {
	const [users, setUsers] = useState();
	const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
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

  const value = useMemo(() => ({ users, fetchUsers: () => getUsers(), isLoading }), [users, isLoading]);

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;