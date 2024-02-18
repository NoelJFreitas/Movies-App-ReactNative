import React, {createContext, useContext, useState} from 'react';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  preferredCategories: string[];
};

interface Props {
  children: React.ReactNode;
}

interface Authentication {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const AuthenticationContext = createContext<Authentication>(
  {} as Authentication,
);

export const AuthenticationProvider: React.FC<Props> = ({children}: Props) => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    preferredCategories: [''],
  });

  return (
    <AuthenticationContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthenticationContext);
  return context;
}
