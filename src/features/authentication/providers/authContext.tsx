import React, {createContext, useContext, useState} from 'react';
import {User} from '@src/types/user';
import {useDispatch} from 'react-redux';
import {setLoggedState, setUserData} from '@store/user/userSlice';
import {getUserStorageData, storeUserData} from '../services/storeData';

interface Props {
  children: React.ReactNode;
}

interface Authentication {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  onFinishSingUp: () => Promise<void>;
  onVerifyStorageUser: () => Promise<boolean>;
}

const AuthenticationContext = createContext<Authentication>(
  {} as Authentication,
);

export const AuthenticationProvider: React.FC<Props> = ({children}: Props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    preferredCategories: [],
  });

  async function onFinishSingUp() {
    await storeUserData(user);
    dispatch(setUserData(user));
    dispatch(setLoggedState(true));
  }

  async function onVerifyStorageUser() {
    const storageUser = await getUserStorageData();
    if (storageUser !== undefined) {
      dispatch(setUserData(storageUser));
      dispatch(setLoggedState(true));
      return true;
    }
    return false;
  }

  return (
    <AuthenticationContext.Provider
      value={{user, setUser, onFinishSingUp, onVerifyStorageUser}}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthenticationContext);
  return context;
}
