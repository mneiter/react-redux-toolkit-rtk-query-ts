import axios from 'axios';
import { IUser } from '../../models/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';

//the  first implementation of the behavior
//
// export const fatchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (ex) {
//     if (ex instanceof Error) {
//       dispatch(userSlice.actions.usersFetchingError(ex.message));
//     } else {
//       console.log('Unexpected error', ex);
//     }
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (ex) {
      if (ex instanceof Error) {
        return thunkAPI.rejectWithValue(ex.message);
      } else {
        console.log('Unexpected error', ex);
      }
    }
  }
);
