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
    toggleTodoCompleted(state, action) {
      const todoId = action.payload;
      const todo = state.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    clearCompletedTodo(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export type { Todo };
export const { addTodo, removeTodo, toggleTodoCompleted, clearCompletedTodo } =
  todoListSlice.actions;
export default todoListSlice.reducer;
