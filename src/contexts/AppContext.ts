import { createContext } from 'react';

type IUser = {
  id: number;
  name: string;
};

type AppContextValue = {
  users: IUser[] | undefined;
  fetchUsers: () => Promise<void> | undefined;
  isLoading: boolean;
};

export const AppContext = createContext<AppContextValue>({ 
  users: [],
  fetchUsers: () => undefined,
  isLoading: false,
 });
