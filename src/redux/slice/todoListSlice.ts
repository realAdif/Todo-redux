import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
