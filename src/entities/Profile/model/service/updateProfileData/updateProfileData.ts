import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const formData = getProfileForm(getState());
  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      '/profile',
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    // thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
