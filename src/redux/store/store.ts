import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slice/themeSlice';
import todoListReducer from '../slice/todoListSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todoList: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
