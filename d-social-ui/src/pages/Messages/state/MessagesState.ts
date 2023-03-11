import { IMessage } from './../Messages.interface';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MessagesState {
 messages: IMessage[];
}

const initialState: MessagesState = {
 messages: [
  { userName: 'Daniel', message: 'Hello gys' },
  { userName: 'Ferro', message: 'Iam spider' },
  { userName: 'Muschita', message: 'Figu camera' },
  { userName: 'Syaon', message: 'Karate' },
  { userName: 'Mike', message: 'Iam gey' },
  { userName: 'Donald', message: 'Iam duck' },
 ],
};

export const messagesSlice = createSlice({
 name: 'counter',
 initialState,
 reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = messagesSlice.actions;

export default messagesSlice.reducer;
