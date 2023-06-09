import { AnyAction, Dispatch, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
interface loginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  { rejectValue: string; dispatch?: Dispatch<AnyAction> }
>('login/loginByUsername', async (data, thunkAPI) => {
  try {
    const res = await axios.post<User>('http://localhost:8000/login', data);
    if (!res.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
    thunkAPI.dispatch(userActions.setAuthData(res.data));
    return res.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('e');
  }
});
