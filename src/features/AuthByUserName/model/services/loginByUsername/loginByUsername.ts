import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User/model/types/user';
interface loginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, loginByUsernameProps>(
  'login/loginByUsername',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post<User>('http://localhost:8000/login', data);
      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('e');
    }
  }
);
