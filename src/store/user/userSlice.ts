import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '@src/types/user';

export interface UserState {
  isLoggedIn: boolean;
  user: User;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    preferredCategories: [],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {setLoggedState, setUserData} = userSlice.actions;
export default userSlice.reducer;
