import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '@src/types/user';

export async function storeUserData(user: User) {
  try {
    await AsyncStorage.setItem('USER', JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
}

export async function getUserStorageData() {
  try {
    const user = await AsyncStorage.getItem('USER');
    if (user) {
      return JSON.parse(user) as User;
    }
  } catch (error) {
    console.error(error);
  }
}
